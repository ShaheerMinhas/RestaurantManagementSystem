import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SideMenu: React.FC = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
      // Handle sign-out logic here (e.g., clear user session)
      alert('You have signed out.');
      navigate('/'); // Navigate to sign-in page or home
    };
  return (

    <div>
      <div
        className="fixed md:relative md:w-64 bg-yellow-800 text-white h-screen p-5 transition-transform duration-300 ">
      
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
    </div>
  )
}

export default SideMenu
