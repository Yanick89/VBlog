// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCum299v5FNl9mFqqDkYkQDBap50whjLP0",
  authDomain: "vblog-58fac.firebaseapp.com",
  projectId: "vblog-58fac",
  storageBucket: "vblog-58fac.appspot.com",
  messagingSenderId: "141952650724",
  appId: "1:141952650724:web:f689d7d72c0d2c7e250bf1",
  measurementId: "G-4CGR3861ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);