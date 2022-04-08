// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBOCwTICKjXgeEDgbx6elouOWn0kT1oUw",
  authDomain: "lemniscate-30462.firebaseapp.com",
  projectId: "lemniscate-30462",
  storageBucket: "lemniscate-30462.appspot.com",
  messagingSenderId: "647003641601",
  appId: "1:647003641601:web:1049d1a17f02619d676d00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const authentication = getAuth(app);