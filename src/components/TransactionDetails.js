import React, { useState } from 'react';

const TransactionDetails = ({ transaction, updateTransaction, deleteTransaction }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...transaction });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTransaction(transaction.id, formData);
    setIsEditing(false);
  };

  return (
    <tr className="border-b">
      {isEditing ? (
        <>
          <td><input className="border p-2 w-full" name="date" value={formData.date} onChange={handleChange} /></td>
          <td><input className="border p-2 w-full" name="description" value={formData.description} onChange={handleChange} /></td>
          <td><input className="border p-2 w-full" name="amount" value={formData.amount} onChange={handleChange} /></td>
          <td><input className="border p-2 w-full" name="category" value={formData.category} onChange={handleChange} /></td>
          <td><input className="border p-2 w-full" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} /></td>
          <td>
            <button onClick={handleUpdate} className="bg-green-500 text-white p-2 rounded">Save</button>
          </td>
        </>
      ) : (
        <>
          <td>{transaction.date}</td>
          <td>{transaction.description}</td>
          <td>${transaction.amount}</td>
          <td>{transaction.category}</td>
          <td>{transaction.paymentMethod}</td>
          <td>
            <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white p-2 rounded mr-2">Edit</button>
            <button onClick={() => deleteTransaction(transaction.id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default TransactionDetails;
