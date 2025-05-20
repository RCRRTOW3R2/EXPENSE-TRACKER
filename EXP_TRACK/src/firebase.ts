// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfRJ8o_Ob0X3jqioutgZhLDVntvn33Jzw",
  authDomain: "expense-tracker-7f613.firebaseapp.com",
  projectId: "expense-tracker-7f613",
  storageBucket: "expense-tracker-7f613.firebasestorage.app",
  messagingSenderId: "636420519016",
  appId: "1:636420519016:web:391114393bc7eca32977dd",
  measurementId: "G-QJ4RWHGFT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);