// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbyU6N0XJr1-AhzR1IdLYt_U_5ZDOa5I4",
  authDomain: "netflixgpt-5cb5b.firebaseapp.com",
  projectId: "netflixgpt-5cb5b",
  storageBucket: "netflixgpt-5cb5b.appspot.com",
  messagingSenderId: "42151861508",
  appId: "1:42151861508:web:63400f3e5a2135f2d0c451",
  measurementId: "G-8J2CTT41KK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();