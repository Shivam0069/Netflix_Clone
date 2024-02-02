// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "firebase/database";
import "firebase/auth";
import { getStorage } from "firebase/storage";

// Required for side-effects
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSQBmXr3WHjbHwY3ky8wcmQkEZLc0EkAo",
  authDomain: "netflix-project-708e8.firebaseapp.com",
  projectId: "netflix-project-708e8",
  storageBucket: "netflix-project-708e8.appspot.com",
  messagingSenderId: "965627258992",
  appId: "1:965627258992:web:3d9306c53adf175ec02cb5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);
