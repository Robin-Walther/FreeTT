// =====================================================================
// FreeTT – Player Web App – Firebase Configuration
// =====================================================================
// Copy the same values from the Electron app's firebase-config.js.
// This file is public (bundled into the static site on Vercel) —
// that is fine for Firebase client configs; security is enforced by
// Firebase security rules, not by hiding the config.
// =====================================================================

const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL:       "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID",
};
