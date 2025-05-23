// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfRJ8o_Ob0X3jqioutgZhLDVntvn33Jzw",
  authDomain: "expense-tracker-7f613.firebaseapp.com",
  projectId: "expense-tracker-7f613",
  storageBucket: "expense-tracker-7f613.appspot.com",
  messagingSenderId: "636420519016",
  appId: "1:636420519016:web:391114393bc7eca32977dd",
  measurementId: "G-QJ4RWHGFT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export const addExpense = async (expense: {
  amount: number;
  category: string;
  description: string;
  date: Date;
}) => {
  try {
    const docRef = await addDoc(collection(db, "expenses"), {
      ...expense,
      date: Timestamp.fromDate(expense.date)
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding expense: ", error);
    throw error;
  }
};

export const getExpenses = async () => {
  try {
    const q = query(collection(db, "expenses"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      date: doc.data().date.toDate()
    }));
  } catch (error) {
    console.error("Error getting expenses: ", error);
    throw error;
  }
};