// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd_b2w_lrNzhRsZGiP3vrzrMKBRuhH8ro",
  authDomain: "radianeducapedia.firebaseapp.com",
  projectId: "radianeducapedia",
  storageBucket: "radianeducapedia.appspot.com",
  messagingSenderId: "45851826218",
  appId: "1:45851826218:web:15b241fd05aa060d410b53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
