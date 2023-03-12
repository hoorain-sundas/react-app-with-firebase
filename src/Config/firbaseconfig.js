// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8DUhQbXMw67aUozjNVrwxZVAFnTYT7zo",
  authDomain: "react-with-firebase-5d603.firebaseapp.com",
  databaseURL: "https://react-with-firebase-5d603-default-rtdb.firebaseio.com",
  projectId: "react-with-firebase-5d603",
  storageBucket: "react-with-firebase-5d603.appspot.com",
  messagingSenderId: "596350563829",
  appId: "1:596350563829:web:c2f8aed558807df2bf9cbc",
  measurementId: "G-KLMPM64QCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;