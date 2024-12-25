// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJErQGW2-BMHCzdP_XZa38vqDR31VsD-U",
  authDomain: "netflixgpt-33dee.firebaseapp.com",
  projectId: "netflixgpt-33dee",
  storageBucket: "netflixgpt-33dee.firebasestorage.app",
  messagingSenderId: "643258832028",
  appId: "1:643258832028:web:d99cc4a2a0842f062d8959",
  measurementId: "G-GJQ2684ZZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);