// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6VQ2B79pP5os59Atz5_czlx8e9Pob7ZY",
  authDomain: "desafioninho-44b8f.firebaseapp.com",
  projectId: "desafioninho-44b8f",
  storageBucket: "desafioninho-44b8f.appspot.com",
  messagingSenderId: "73968105533",
  appId: "1:73968105533:web:2fac325055cdda12ff9254",
  measurementId: "G-89RKCMZEW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);