// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY7SoWIfTjJxObKsxfrpyEC7WP2nf-apk",
  authDomain: "netflixgpt-92d01.firebaseapp.com",
  projectId: "netflixgpt-92d01",
  storageBucket: "netflixgpt-92d01.appspot.com",
  messagingSenderId: "429133363533",
  appId: "1:429133363533:web:1ad9b0614abccf25aa5f04",
  measurementId: "G-QNKW2TZY6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();