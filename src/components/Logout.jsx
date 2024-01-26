// Logout.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Include the Header styles for consistent styling

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    // Clear any authentication-related data (e.g., tokens, user info, etc.)
    // For this example, let's assume you're using localStorage to store a token
    localStorage.removeItem('authToken');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <button className="menu-btn logout-btn" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
