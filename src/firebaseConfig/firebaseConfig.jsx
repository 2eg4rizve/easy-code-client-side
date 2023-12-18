// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCttJQtx-NtGWdGgrdVsymvBUhEWm23WAA",
  authDomain: "easycode-cfbc4.firebaseapp.com",
  projectId: "easycode-cfbc4",
  storageBucket: "easycode-cfbc4.appspot.com",
  messagingSenderId: "979116989176",
  appId: "1:979116989176:web:76dcbb12e7df7e0a34790d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);