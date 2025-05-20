import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
export const ExpenseTimeline = ({
  expenses,
  darkMode
}) => {
  const scrollRef = useRef(null);
  const scroll = direction => {
    if (scrollRef.current) {
      const {
        current
      } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };
  return <section className="relative">
      <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
        Recent Expenses
      </h2>
      <div className="flex items-center">
        <button onClick={() => scroll('left')} className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'} mr-2 transition-colors duration-200`}>
          <ChevronLeftIcon size={20} />
        </button>
        <div ref={scrollRef} className="flex overflow-x-auto pb-4 hide-scrollbar space-x-4" style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
          {expenses.map(expense => <div key={expense.id} className={`flex-shrink-0 w-64 rounded-lg p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-transform duration-300 hover:scale-105 transform`}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium">{expense.description}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {formatDate(expense.date)}
                  </p>
                </div>
                <span className="text-2xl">{expense.category.emoji}</span>
              </div>
              {expense.photoUrl && <div className="h-32 w-full mb-3 overflow-hidden rounded-md">
                  <img src={expense.photoUrl} alt={expense.description} className="h-full w-full object-cover" />
                </div>}
              <div className="flex justify-between items-center">
                <span className={`text-sm font-medium ${expense.paidBy === 'Diego' ? darkMode ? 'text-blue-400' : 'text-blue-600' : darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                  Paid by {expense.paidBy}
                </span>
                <span className="font-bold">${expense.amount.toFixed(2)}</span>
              </div>
            </div>)}
        </div>
        <button onClick={() => scroll('right')} className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'} ml-2 transition-colors duration-200`}>
          <ChevronRightIcon size={20} />
        </button>
      </div>
    </section>;
};