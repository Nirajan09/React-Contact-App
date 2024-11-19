// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore}  from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzuOSTcJ4qi1XENzs9cNxbyS3xh9lzglQ",
  authDomain: "fir-contact-app-a0f98.firebaseapp.com",
  projectId: "fir-contact-app-a0f98",
  storageBucket: "fir-contact-app-a0f98.appspot.com",
  messagingSenderId: "265134397483",
  appId: "1:265134397483:web:a09347d1485fd614a1326e",
  measurementId: "G-5BLNSEW0CZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);