// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvUWIudnZtVHSP8ZmE8GylYsBrHziHe6Y",
  authDomain: "new-dragons-website.firebaseapp.com",
  projectId: "new-dragons-website",
  storageBucket: "new-dragons-website.appspot.com",
  messagingSenderId: "984741419148",
  appId: "1:984741419148:web:e0b3744cf9c8759cd9c3a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;