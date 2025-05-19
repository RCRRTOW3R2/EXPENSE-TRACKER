import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ExpenseTimeline } from './components/ExpenseTimeline';
import { SpendingChart } from './components/SpendingChart';
import { AddExpenseButton } from './components/AddExpenseButton';
import { AddExpenseModal } from './components/AddExpenseModal';
import { ThemeToggle } from './components/ThemeToggle';
import { db } from './firebase';
import { collection, onSnapshot, addDoc, query, orderBy } from 'firebase/firestore';

export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [expenses, setExpenses] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Real-time Firestore sync
  useEffect(() => {
    const q = query(collection(db, 'expenses'), orderBy('date', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setExpenses(data);
    });
    return () => unsubscribe();
  }, []);

  const addExpense = async (expense: any) => {
    // Remove id (Firestore will generate one)
    const { id, ...expenseData } = expense;
    await addDoc(collection(db, 'expenses'), expenseData);
    setIsModalOpen(false);
  };

  return <div className={`min-h-screen w-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <f className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex justify-end mb-4">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <Header darkMode={darkMode} />
        <main className="space-y-8 pb-24">
          <ExpenseTimeline expenses={expenses} darkMode={darkMode} />
          <SpendingChart expenses={expenses} darkMode={darkMode} />
        </main>
        <AddExpenseButton onClick={() => setIsModalOpen(true)} darkMode={darkMode} />
        {isModalOpen && <AddExpenseModal onClose={() => setIsModalOpen(false)} onAdd={addExpense} darkMode={darkMode} />}
      </div>
    </div>;
}