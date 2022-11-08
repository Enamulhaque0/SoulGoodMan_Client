// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGrXYj2s0W92DNgL8CkKtn6ZixiqkneMc",
  authDomain: "soul-goodman.firebaseapp.com",
  projectId: "soul-goodman",
  storageBucket: "soul-goodman.appspot.com",
  messagingSenderId: "1039112829934",
  appId: "1:1039112829934:web:eb423ea705950ccb31acff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app