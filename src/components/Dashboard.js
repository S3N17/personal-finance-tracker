import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionForm from './TransactionForm';
import TransactionDetails from './TransactionDetails';
import SummaryView from './SummaryView';
import { addTransaction, updateTransaction, deleteTransaction } from '../services/transactionService';
import './Dashboard.css';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/transactions');
      setTransactions(response.data);
    } catch (err) {
      setError('Failed to fetch transactions');
    }
  };

  const handleAddTransaction = async (transaction) => {
    try {
      const response = await addTransaction(transaction);
      setTransactions([...transactions, response]);
    } catch (err) {
      setError('Failed to add transaction');
    }
  };

  const handleUpdateTransaction = async (id, updatedTransaction) => {
    try {
      await updateTransaction(id, updatedTransaction);
      const updatedTransactions = transactions.map(transaction =>
        transaction.id === id ? { ...transaction, ...updatedTransaction } : transaction
      );
      setTransactions(updatedTransactions);
    } catch (err) {
      setError('Failed to update transaction');
    }
  };

  const handleDeleteTransaction = async (id) => {
    try {
      await deleteTransaction(id);
      const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
      setTransactions(updatedTransactions);
    } catch (err) {
      setError('Failed to delete transaction');
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Personal Finance Tracker</h1> */}
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <TransactionForm addTransaction={handleAddTransaction} />
      <SummaryView transactions={transactions} />
      <div className="mt-4">
        {transactions.length > 0 ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Date</th>
                <th className="py-2">Description</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Category</th>
                <th className="py-2">Payment Method</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <TransactionDetails
                  key={transaction.id}
                  transaction={transaction}
                  updateTransaction={handleUpdateTransaction}
                  deleteTransaction={handleDeleteTransaction}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p>No transactions found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
