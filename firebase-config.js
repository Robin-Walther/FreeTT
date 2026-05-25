// =====================================================================
// FreeTT – Firebase Configuration
// =====================================================================
// Fill in your Firebase project values before distributing the app.
// Get these from: Firebase Console → Project Settings → Your apps → SDK setup
//
// ALSO copy this file (with the same values) into player-web/firebase-config.js
// before deploying the player web app to Vercel.
// =====================================================================

window.FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL:       "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID",
};

// URL of the deployed player web app (from Vercel).
// Example: "https://freett-player.vercel.app"
// Players will receive links like: PLAYER_APP_URL?session=ABC123&player=UUID
window.PLAYER_APP_URL = "https://YOUR-PLAYER-APP.vercel.app";
