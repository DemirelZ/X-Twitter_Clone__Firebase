// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZHDOObK7ABLDFjFo7JyDjq0h4eFX-M1g",
  authDomain: "twitterclone-6f8ad.firebaseapp.com",
  projectId: "twitterclone-6f8ad",
  storageBucket: "twitterclone-6f8ad.appspot.com",
  messagingSenderId: "24458792902",
  appId: "1:24458792902:web:3ae5ddec81ffbd053dacc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);