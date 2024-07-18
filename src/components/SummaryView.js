import React from 'react';

const SummaryView = ({ transactions }) => {
  const totalIncome = transactions
    .filter(transaction => transaction.category === 'income')
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);
  
  const totalExpenses = transactions
    .filter(transaction => transaction.category === 'expense')
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);
  
  const balance = totalIncome - totalExpenses;

  return (
    <div className="p-4 bg-gray-100 rounded mb-4 shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Financial Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200 transition duration-300 ease-in-out transform hover:scale-105">
          <p className="text-lg font-bold mb-2">Total Income</p>
          <p className="text-2xl">${totalIncome.toFixed(2)}</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg text-center hover:bg-red-200 transition duration-300 ease-in-out transform hover:scale-105">
          <p className="text-lg font-bold mb-2">Total Expenses</p>
          <p className="text-2xl">${totalExpenses.toFixed(2)}</p>
        </div>
        <div className={`p-4 rounded-lg text-center ${balance >= 0 ? 'bg-green-100 hover:bg-green-200' : 'bg-red-100 hover:bg-red-200'} transition duration-300 ease-in-out transform hover:scale-105`}>
          <p className="text-lg font-bold mb-2">Balance</p>
          <p className={`text-2xl ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>${balance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryView;
