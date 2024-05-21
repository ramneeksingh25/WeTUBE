// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmjRY61GNRuYKQ1rqei3gm02wwKUlP0sE",
  authDomain: "video-664a9.firebaseapp.com",
  projectId: "video-664a9",
  storageBucket: "video-664a9.appspot.com",
  messagingSenderId: "968296929494",
  appId: "1:968296929494:web:2dd05e459d057c07991177"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;