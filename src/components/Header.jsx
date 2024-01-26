import React from 'react';
import Logout from './Logout'; // Adjust the path accordingly
import './Header.css'; // Adjust the path accordingly

const Header = () => {
  return (
    <div className="header">
      <nav>
        <a href="#" className="menu-btn">
          EMPLOYEES
        </a>
        <a href="#" className="menu-btn">
          PTO
        </a>
      </nav>
      <div className="logout">
        <Logout />
      </div>
    </div>
  );
};

export default Header;
