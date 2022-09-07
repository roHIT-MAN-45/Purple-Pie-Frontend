import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase Credentials 🔑
import { firebaseCredentials } from "../Config/env";

// Firebase Storage
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseCredentials.API_KEY,
  authDomain: firebaseCredentials.AUTH_DOMAIN,
  projectId: firebaseCredentials.PROJECT_ID,
  storageBucket: firebaseCredentials.STORAGE_BUCKET,
  messagingSenderId: firebaseCredentials.MESSAGING_SENDER_ID,
  appId: firebaseCredentials.APP_ID,
  measurementId: firebaseCredentials.MEASUREMENT_Id,
};

// Initialize Firebase 🎉
const app = initializeApp(firebaseConfig);

/*
Check if it's not a browser extension environment.
Check if cookies are enabled in current browser.
Check if IndexedDB is supported by the browser environment.
Check if the current browser context is valid for using IndexedDB.open()
*/
isSupported().then((support) => {
  if (support) {
    const analytics = getAnalytics(app);
  }
});

// Created Storage Instance 📦
const storage = getStorage();

export default storage;
