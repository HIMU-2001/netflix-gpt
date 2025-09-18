// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_dErvxHT818TYjsv5NFZJQ9M_mHaPNoA",
  authDomain: "netflix-gpt-30a4e.firebaseapp.com",
  projectId: "netflix-gpt-30a4e",
  storageBucket: "netflix-gpt-30a4e.firebasestorage.app",
  messagingSenderId: "1024970666226",
  appId: "1:1024970666226:web:4c408221bf6233f6df606b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
