import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/grocery-list">Grocery List</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/articles">Articles</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
