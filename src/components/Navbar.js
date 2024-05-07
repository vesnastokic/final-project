import React from 'react'; // Import React
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './Navbar.css'; // Import CSS for styling the Navbar

// Functional component for rendering the Navbar
const Navbar = () => {
  return (
    <nav className="navbar"> {/* Navbar container */}
      <ul> {/* Unordered list for navigation links */}
        {/* Navigation links */}
        <li><Link to="/">Home</Link></li> {/* Link to Home */}
        <li><Link to="/grocery-list">Grocery List</Link></li> {/* Link to Grocery List */}
        <li><Link to="/activities">Activities</Link></li> {/* Link to Activities */}
        <li><Link to="/articles">Articles</Link></li> {/* Link to Articles */}
      </ul>
    </nav>
  );
};

export default Navbar; // Export the Navbar component as the default export
