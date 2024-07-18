import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    amount: '',
    category: '',
    paymentMethod: ''
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.description || !formData.amount || !formData.category || !formData.paymentMethod) {
      setError('All fields are required');
      return;
    }
    const newTransaction = { ...formData, id: Date.now() };
    addTransaction(newTransaction);
    setFormData({ date: '', description: '', amount: '', category: '', paymentMethod: '' });
    setError(null); // Clear error state after successful submission
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 shadow-lg rounded-lg px-6 py-4 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Add New Transaction</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input id="date" type="date" className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Amount ($)</label>
          <input id="amount" type="number" step="0.01" min="0" className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300" name="amount" value={formData.amount} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select id="category" className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300" name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div>
          <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
          <input id="paymentMethod" type="text" className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea id="description" className="border border-gray-300 rounded p-2 w-full h-20 focus:outline-none focus:ring focus:border-blue-300 transition duration-300" name="description" value={formData.description} onChange={handleChange} required></textarea>
      </div>
      <button type="submit" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
