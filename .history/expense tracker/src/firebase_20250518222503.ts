import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfRJ8o_Ob0X3jqioutgZhLDVntvn33Jzw",
  authDomain: "expense-tracker-7f613.firebaseapp.com",
  projectId: "expense-tracker-7f613",
  storageBucket: "expense-tracker-7f613.appspot.com",
  messagingSenderId: "636420519016",
  appId: "1:636420519016:web:391114393bc7eca32977dd",
  measurementId: "G-QJ4RWHGFT0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
