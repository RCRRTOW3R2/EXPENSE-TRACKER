import React from 'react';
import { PlusIcon } from 'lucide-react';
export const AddExpenseButton = ({
  onClick,
  darkMode
}) => {
  return <button onClick={onClick} className={`fixed bottom-6 right-6 w-16 h-16 rounded-full ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 transform`} aria-label="Add expense">
      <PlusIcon size={24} />
    </button>;
};