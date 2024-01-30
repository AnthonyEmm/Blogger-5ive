// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogger5ive.firebaseapp.com",
  projectId: "blogger5ive",
  storageBucket: "blogger5ive.appspot.com",
  messagingSenderId: "923078529582",
  appId: "1:923078529582:web:d88ffede36f2bc0ac2c5bf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
