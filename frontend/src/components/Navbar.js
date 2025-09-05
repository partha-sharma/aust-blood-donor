// frontend/src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Basic inline styles for the navbar. You can move these to a CSS file later.
  const navStyle = {
    backgroundColor: '#fff',
    padding: '10px 40px',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle = {
    fontWeight: 'bold',
    color: '#d9534f', // A shade of red
    textDecoration: 'none',
    fontSize: '24px'
  };
  
  const linkStyle = {
    margin: '0 15px',
    textDecoration: 'none',
    color: '#333'
  };

  return (
    <nav style={navStyle}>
      <div>
        <Link to="/" style={logoStyle}>❤️ AUST Blood Donor</Link>
      </div>
      <div>
        {/* We will add logic later to show different links if the user is logged in */}
        <Link to="/newsfeed" style={linkStyle}>Newsfeed</Link>
        <Link to="/dashboard" style={linkStyle}>My Dashboard</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;