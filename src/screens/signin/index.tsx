import React, { useState } from 'react';
import '/bg.png'
import logo from '/ShadesofSpice.svg';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., form validation, API calls)
    if(username=='admin'&& password=='admin123'){
      alert("Login Successful");
      navigate('/dashboard');
    } 
    else alert("Login Failed")

    console.log(username);
    console.log(password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-custom-bg bg-cover bg-center">
    <div className="bg-white/30 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md border border-white/20">
      <div className="bg-white/30 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md border border-white/20">
      <div className="flex flex-col items-center mb-4">
  <img
    src={logo}
    alt="Shades Of Spice Logo"
    className="h-40 mb-4 object-contain" // Adjust height as necessary
  />
</div>        <h2 className="text-xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
