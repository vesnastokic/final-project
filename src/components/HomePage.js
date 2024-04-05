import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Stay at Home Moms!</h1>
      <p>Here, you're not alone. We understand the challenges you face every day. This site is here to support you, offering tools to help you organize your day, insightful articles to guide you, and fun activities to enjoy with your kids.</p>
      <div className="section-links">
        <h2>Explore Our Sections</h2>
        <ul>
          <li><Link to="/grocery-list">Grocery List</Link></li>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="/articles">Articles</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
