import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './screens/signin'; // Adjust the path based on your project structure
import Dashboard from './screens/dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignIn />} /> {/* Home route for SignIn */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Route for Dashboard */}
          {/* Add more routes as necessary */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
