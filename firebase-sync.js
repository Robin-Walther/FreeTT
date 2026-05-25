'use strict';

// FreeTT – Firebase Sync Adapter (DM renderer)
// Loaded after Firebase compat SDK scripts and firebase-config.js.
// Uses only Firebase Realtime Database (free Spark plan) — no Storage required.
// Images are stored as compressed JPEG/PNG data URLs directly in the database.

const FIREBASE_SYNC = (() => {
  let db = null;
  let sessionId = null;
  let playerMoveRef      = null;
  let playerMoveCallback = null;

  // --- Initialisation ---

  function init() {
    if (typeof firebase === 'undefined') return false;
    if (!window.FIREBASE_CONFIG || window.FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') {
      console.warn('[FirebaseSync] firebase-config.js not configured.');
      return false;
    }
    if (!firebase.apps.length) {
      firebase.initializeApp(window.FIREBASE_CONFIG);
    }
    db = firebase.database();
    return true;
  }

  // --- Session ---

  function generateCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    return Array.from({ length: 6 }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    ).join('');
  }

  async function startSession() {
    if (!db) throw new Error('Firebase nicht initialisiert');
    sessionId = generateCode();
    await db.ref(`sessions/${sessionId}`).set({
      createdAt:   firebase.database.ServerValue.TIMESTAMP,
      dmConnected: true,
    });
    listenForPlayerMoves();
    return sessionId;
  }

  async function endSession() {
    if (!db || !sessionId) return;
    if (playerMoveRef) { playerMoveRef.off(); playerMoveRef = null; }
    try { await db.ref(`sessions/${sessionId}`).remove(); } catch (_) {}
    sessionId = null;
  }

  function getSessionId() { return sessionId; }

  // --- Player token-move listener (DM side) ---

  function listenForPlayerMoves() {
    if (!db || !sessionId) return;
    if (playerMoveRef) playerMoveRef.off();
    playerMoveRef = db.ref(`sessions/${sessionId}/tokens`);
    playerMoveRef.on('child_changed', snap => {
      if (playerMoveCallback) playerMoveCallback(snap.key, snap.val());
    });
  }

  function onPlayerTokenMoved(cb) { playerMoveCallback = cb; }

  // --- State pushes (all use Realtime Database, no Storage) ---

  // imageDataUrl: compressed JPEG data URL (created by compressImageForRemote in dm-screen.js)
  async function pushMap(imageDataUrl, name) {
    if (!db || !sessionId) return;
    await db.ref(`sessions/${sessionId}/map`).set({
      imageData: imageDataUrl,
      name,
      type: 'image',
    });
  }

  async function pushFog(dataUrl, width, height) {
    if (!db || !sessionId) return;
    await db.ref(`sessions/${sessionId}/fog`).set({ dataUrl, width, height });
  }

  async function pushGrid(data) {
    if (!db || !sessionId) return;
    await db.ref(`sessions/${sessionId}/grid`).set(data);
  }

  async function pushVolume(data) {
    if (!db || !sessionId) return;
    await db.ref(`sessions/${sessionId}/volume`).set(data);
  }

  // tokens: [{id, name, type, tokenData (PNG dataUrl or null), tokenX, tokenY, tokenSize, controllerId}]
  async function pushTokens(tokens) {
    if (!db || !sessionId) return;
    const fbTokens = {};
    for (const t of tokens) {
      fbTokens[t.id] = {
        id:           t.id,
        name:         t.name,
        type:         t.type,
        tokenData:    t.tokenData ?? null,
        tokenX:       t.tokenX,
        tokenY:       t.tokenY,
        tokenSize:    t.tokenSize,
        controllerId: t.controllerId ?? null,
      };
    }
    await db.ref(`sessions/${sessionId}/tokens`).set(fbTokens);
  }

  return {
    init,
    startSession,
    endSession,
    getSessionId,
    pushMap,
    pushFog,
    pushGrid,
    pushVolume,
    pushTokens,
    onPlayerTokenMoved,
  };
})();
