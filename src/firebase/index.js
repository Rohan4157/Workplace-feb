// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4nY195LWIfVxYInqNGyiJFjdeIdQ2Fj4",
  authDomain: "project-workplace-2ae29.firebaseapp.com",
  projectId: "project-workplace-2ae29",
  storageBucket: "project-workplace-2ae29.appspot.com",
  messagingSenderId: "617737450560",
  appId: "1:617737450560:web:36a31cb1b90016e50c5ba5"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);
export const storage = getStorage(app);