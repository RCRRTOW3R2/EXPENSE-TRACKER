import React from 'react';
import { Goose, Shark } from 'lucide-react';
export const Header = ({
  darkMode
}) => {
  return <header className={`rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-500 to-purple-400'} p-6 mb-8 shadow-lg`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className={`h-14 w-14 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-400' : 'bg-blue-100'} text-2xl`}>
            <Goose size={32} />
          </div>
          <span className="font-bold text-xl">Diego</span>
        </div>
        <div className={`text-center ${darkMode ? 'text-blue-300' : 'text-white'}`}>
          <h1 className="text-2xl font-bold">Joint Expenses</h1>
          <p className="text-sm opacity-80">Track together, save together</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl">Emma</span>
          <div className={`h-14 w-14 rounded-full flex items-center justify-center ${darkMode ? 'bg-pink-400' : 'bg-pink-100'} text-2xl`}>
            <Shark size={32} />
          </div>
        </div>
      </div>
    </header>;
};