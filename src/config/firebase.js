// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeQJLxTdwgnkjS6KWmd9nkqjnKi3V3QtM",
  authDomain: "vite-contact-eea9c.firebaseapp.com",
  projectId: "vite-contact-eea9c",
  storageBucket: "vite-contact-eea9c.appspot.com",
  messagingSenderId: "709938150697",
  appId: "1:709938150697:web:0ac3d4e82a3ce6ce064b38",
  measurementId: "G-LWTRYJ7LNS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
export const db=getFirestore(app);