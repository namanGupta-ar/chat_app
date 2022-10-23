// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'; // For applying CRUD operations
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID

  apiKey: "AIzaSyBq8xtNyvRSLrjWG11sknjbLkCsCOB01TM",
  authDomain: "creative-writes-f1aa4.firebaseapp.com",
  projectId: "creative-writes-f1aa4",
  storageBucket: "creative-writes-f1aa4.appspot.com",
  messagingSenderId: "500484049419",
  appId: "1:500484049419:web:06ce02b3312fd6a857150e",
  measurementId: "G-TS5WM0VM4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(); //  this is going to set the user
export const db = getFirestore(app);