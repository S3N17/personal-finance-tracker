import axios from 'axios';

// Base URL for the API endpoint
const BASE_URL = 'http://localhost:5000/transactions';

/**
 * Fetches all transactions from the API.
 * @returns {Promise<Array>} Array of transactions.
 */
export const fetchTransactions = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw new Error('Failed to fetch transactions');
  }
};

/**
 * Adds a new transaction to the API.
 * @param {Object} transaction - The transaction to add.
 * @returns {Promise<Object>} The added transaction.
 */
export const addTransaction = async (transaction) => {
  try {
    const response = await axios.post(BASE_URL, transaction);
    return response.data;
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw new Error('Failed to add transaction');
  }
};

/**
 * Updates an existing transaction by ID.
 * @param {number} id - The ID of the transaction to update.
 * @param {Object} updatedTransaction - The updated transaction data.
 * @returns {Promise<Object>} The updated transaction.
 */
export const updateTransaction = async (id, updatedTransaction) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedTransaction);
    return response.data;
  } catch (error) {
    console.error('Error updating transaction:', error);
    throw new Error('Failed to update transaction');
  }
};

/**
 * Deletes a transaction by ID.
 * @param {number} id - The ID of the transaction to delete.
 * @returns {Promise<Object>} The response data from the deletion.
 */
export const deleteTransaction = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting transaction:', error);
    throw new Error('Failed to delete transaction');
  }
};
