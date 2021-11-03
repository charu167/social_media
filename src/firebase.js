// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCknTZANR3OW25dpdcnGSQ_Mj6CG81tUBY",
  authDomain: "socialmedia-6a12b.firebaseapp.com",
  projectId: "socialmedia-6a12b",
  storageBucket: "socialmedia-6a12b.appspot.com",
  messagingSenderId: "704700103493",
  appId: "1:704700103493:web:a034ee879872f48fe19c2c",
  measurementId: "G-6W6B8CCM8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);