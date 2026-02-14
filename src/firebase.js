// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_jdwvmJrd-qqaWi8B5ocq_WPQv0gs8Qw",
  authDomain: "checks-me.firebaseapp.com",
  projectId: "checks-me",
  storageBucket: "checks-me.firebasestorage.app",
  messagingSenderId: "337065016817",
  appId: "1:337065016817:web:225a5c85cf38c322b35850",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
