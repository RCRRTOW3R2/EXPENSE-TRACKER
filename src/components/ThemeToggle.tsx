import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
export const ThemeToggle = ({
  darkMode,
  setDarkMode
}) => {
  return <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'} transition-colors duration-200`} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
      {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
    </button>;
};