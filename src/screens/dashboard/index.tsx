// src/screens/Dashboard.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  // Set default to open
  const [isOpen, setIsOpen] = useState(true); // Changed to true
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Handle sign-out logic here (e.g., clear user session)
    alert('You have signed out.');
    navigate('/'); // Navigate to sign-in page or home
  };

  return (
    <div className="flex">
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden p-4 text-white bg-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Left Sidebar */}
      <div
        className={`fixed md:relative md:w-64 bg-yellow-800 text-white h-screen p-5 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h2 className="text-lg font-bold mb-6 mt-8">Shades Of Spices</h2>
        <ul>
          <li className="mb-4">
            <Link to="/create-order" className="hover:text-yellow-400">
              Create Order
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/chef" className="hover:text-yellow-400">
              Chef
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/waiter" className="hover:text-yellow-400">
              Waiter
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin" className="hover:text-yellow-400">
              Admin
            </Link>
          </li>
          <li>
            <button onClick={handleSignOut} className="w-full text-left hover:text-yellow-400">
              Sign Out
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-10 bg-gray-100 md:ml-64">
        <h1 className="text-3xl font-bold">Welcome to the Dashboard!</h1>
        {/* Add more content for the dashboard here */}
      </div>
    </div>
  );
};

export default Dashboard;
