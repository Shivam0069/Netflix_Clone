// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSQBmXr3WHjbHwY3ky8wcmQkEZLc0EkAo",
  authDomain: "netflix-project-708e8.firebaseapp.com",
  projectId: "netflix-project-708e8",
  storageBucket: "netflix-project-708e8.appspot.com",
  messagingSenderId: "965627258992",
  appId: "1:965627258992:web:3d9306c53adf175ec02cb5",
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
