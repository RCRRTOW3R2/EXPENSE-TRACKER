import React, { useState } from 'react';
import { XIcon, CameraIcon, Utensils, Wine, FileText, Plane, Film, ShoppingBag, Lightbulb } from 'lucide-react';
export const AddExpenseModal = ({
  onClose,
  onAdd,
  darkMode
}) => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    paidBy: 'Diego',
    category: 'food',
    photoUrl: ''
  });
  const categories = [
    { name: 'Food', icon: Utensils, value: 'food', color: '#FF6B6B' },
    { name: 'Drinks', icon: Wine, value: 'drinks', color: '#A78BFA' },
    { name: 'Bills', icon: FileText, value: 'bills', color: '#6B5B95' },
    { name: 'Travel', icon: Plane, value: 'travel', color: '#FFD166' },
    { name: 'Entertainment', icon: Film, value: 'entertainment', color: '#F86624' },
    { name: 'Shopping', icon: ShoppingBag, value: 'shopping', color: '#4ECDC4' },
    { name: 'Other', icon: Lightbulb, value: 'other', color: '#7DCFB6' }
  ];
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const selectedCategory = categories.find(cat => cat.value === formData.category);
    const newExpense = {
      id: Date.now().toString(),
      description: formData.description,
      amount: parseFloat(formData.amount) || 0,
      date: formData.date,
      paidBy: formData.paidBy,
      category: {
        name: selectedCategory.name,
        icon: selectedCategory.icon,
        color: selectedCategory.color
      },
      photoUrl: formData.photoUrl || ''
    };
    onAdd(newExpense);
  };
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`w-full max-w-md rounded-xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 animate-fade-in-up`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
            Add New Expense
          </h2>
          <button onClick={onClose} className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <XIcon size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <input type="text" name="description" value={formData.description} onChange={handleChange} required className={`w-full p-2 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'} border`} placeholder="Dinner, groceries, etc." />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Amount ($)</label>
            <input type="number" name="amount" value={formData.amount} onChange={handleChange} required min="0.01" step="0.01" className={`w-full p-2 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'} border`} placeholder="0.00" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} className={`w-full p-2 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'} border`} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Paid By</label>
              <select name="paidBy" value={formData.paidBy} onChange={handleChange} className={`w-full p-2 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'} border`}>
                <option value="Diego">Diego</option>
                <option value="Emma">Emma</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <div className="grid grid-cols-3 gap-2">
              {categories.map(category => {
                const Icon = category.icon;
                return (
                  <label key={category.value} className={`flex flex-col items-center p-2 rounded-md cursor-pointer transition-all ${formData.category === category.value ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 border-blue-500 border' : darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'}`}>
                    <input type="radio" name="category" value={category.value} checked={formData.category === category.value} onChange={handleChange} className="sr-only" />
                    <Icon className="mb-1" size={24} />
                    <span className="text-xs">{category.name}</span>
                  </label>
                );
              })}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Photo URL (optional)
            </label>
            <div className="flex">
              <input type="text" name="photoUrl" value={formData.photoUrl} onChange={handleChange} className={`w-full p-2 rounded-l-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'} border`} placeholder="https://example.com/image.jpg" />
              <button type="button" className={`px-3 rounded-r-md ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                <CameraIcon size={20} />
              </button>
            </div>
            <p className="text-xs mt-1 opacity-70">
              Enter a URL for receipt or item photo
            </p>
          </div>
          <div className="flex justify-end space-x-3 pt-2">
            <button type="button" onClick={onClose} className={`px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}>
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>;
};