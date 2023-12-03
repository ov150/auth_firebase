// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT19VpbH6-rUPXeDi_d3KlB1FTndK86r4",
  authDomain: "next-auth-cc010.firebaseapp.com",
  projectId: "next-auth-cc010",
  storageBucket: "next-auth-cc010.appspot.com",
  messagingSenderId: "558138712173",
  appId: "1:558138712173:web:40168365d3c29262861f64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);