import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ComposedChart, Line } from 'recharts';
export const SpendingChart = ({
  expenses,
  darkMode
}) => {
  const [chartType, setChartType] = useState('pie');
  // Process expenses into category-based data
  const getCategoryData = () => {
    const categoryMap = {};
    expenses.forEach(expense => {
      const {
        category,
        amount
      } = expense;
      if (categoryMap[category.name]) {
        categoryMap[category.name].value += amount;
      } else {
        categoryMap[category.name] = {
          name: category.name,
          value: amount,
          emoji: category.emoji,
          color: category.color
        };
      }
    });
    return Object.values(categoryMap);
  };
  const categoryData = getCategoryData();
  return <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-md`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
          Spending Breakdown
        </h2>
        <div className={`flex rounded-lg overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <button className={`px-3 py-1 text-sm ${chartType === 'pie' ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white' : ''}`} onClick={() => setChartType('pie')}>
            Pie
          </button>
          <button className={`px-3 py-1 text-sm ${chartType === 'bar' ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white' : ''}`} onClick={() => setChartType('bar')}>
            Bar
          </button>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={categoryData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value" label={({
            name,
            emoji,
            percent
          }) => `${emoji} ${name} (${(percent * 100).toFixed(0)}%)`}>
              {categoryData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color || `#${Math.floor(Math.random() * 16777215).toString(16)}`} />)}
            </Pie>
            <Tooltip formatter={value => [`$${value.toFixed(2)}`, 'Amount']} contentStyle={{
            backgroundColor: darkMode ? '#374151' : '#fff',
            borderColor: darkMode ? '#4B5563' : '#E5E7EB'
          }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
        {categoryData.map(category => <div key={category.name} className={`flex items-center p-2 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <span className="text-xl mr-2">{category.emoji}</span>
            <div>
              <p className="text-sm font-medium">{category.name}</p>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                ${category.value.toFixed(2)}
              </p>
            </div>
          </div>)}
      </div>
      {/* New Bar Chart Section */}
      <div className="relative -mt-16 z-10 transition-all duration-300 hover:z-20 hover:mt-0">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-md`}> 
          <h2 className={`text-lg font-bold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>Bar Chart Breakdown</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#E5E7EB'} />
                <XAxis dataKey="name" stroke={darkMode ? '#93c5fd' : '#1e40af'} />
                <YAxis stroke={darkMode ? '#93c5fd' : '#1e40af'} />
                <Tooltip contentStyle={{ backgroundColor: darkMode ? '#374151' : '#fff', borderColor: darkMode ? '#4B5563' : '#E5E7EB' }} />
                <Bar dataKey="value">
                  {categoryData.map((entry, index) => (
                    <Cell key={`bar-cell-${index}`} fill={entry.color || `#${Math.floor(Math.random() * 16777215).toString(16)}`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* New Stock Market Style Chart Section */}
      <div className="relative -mt-16 z-0 transition-all duration-300 hover:z-20 hover:mt-0 mb-4">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-md`}> 
          <h2 className={`text-lg font-bold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>Stock Market Style Bars</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={categoryData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#E5E7EB'} />
                <XAxis dataKey="name" stroke={darkMode ? '#93c5fd' : '#1e40af'} />
                <YAxis stroke={darkMode ? '#93c5fd' : '#1e40af'} />
                <Tooltip contentStyle={{ backgroundColor: darkMode ? '#374151' : '#fff', borderColor: darkMode ? '#4B5563' : '#E5E7EB' }} />
                <Bar dataKey="value" barSize={20} fill="#8884d8">
                  {categoryData.map((entry, index) => (
                    <Cell key={`stock-bar-cell-${index}`} fill={entry.color || `#${Math.floor(Math.random() * 16777215).toString(16)}`} />
                  ))}
                </Bar>
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>;
};