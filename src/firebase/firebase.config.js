// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-AFjukcHzrM0j7_e2Q1ikq4zjp_kQQv0",
  authDomain: "user-pass-auth-475cc.firebaseapp.com",
  projectId: "user-pass-auth-475cc",
  storageBucket: "user-pass-auth-475cc.appspot.com",
  messagingSenderId: "939304041510",
  appId: "1:939304041510:web:d131120b61c4ae8de47ae7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;