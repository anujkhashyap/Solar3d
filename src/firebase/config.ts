// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW74wk84u1G-lH_zXZ48s2uAkPtgvuCGo",
  authDomain: "solar-527e1.firebaseapp.com",
  projectId: "solar-527e1",
  storageBucket: "solar-527e1.firebasestorage.app",
  messagingSenderId: "561496541471",
  appId: "1:561496541471:web:14a7b540916030e7a1482a",
  measurementId: "G-ZN4W7XMDXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export Firestore instance