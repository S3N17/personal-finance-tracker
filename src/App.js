import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css'; // Import custom CSS for additional styling

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Personal Finance Tracker</h1>
      </header>
      <main className="app-main">
        <Dashboard />
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </footer>
    </div>
  );
};

export default App;
