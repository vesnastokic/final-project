import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; 

const HomePage = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data.slip.advice);
      } catch (error) {
        console.error("Error fetching advice:", error);
      }
    };

    fetchAdvice();
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to Stay at Home Moms!</h1>
      <img
        src="https://d.newsweek.com/en/full/2060197/frustrated-mom.webp?w=790&f=b993fd81d976e147d5f22e2bddd11577"
        alt="Welcome"
      />
      <p>
        Here, you're not alone. We understand the challenges you face every day.
        This site is here to support you, offering tools to help you organize
        your day, insightful articles to guide you, and fun activities to enjoy
        with your kids.
      </p>
      <div className="section-links">
        <h2>Explore Our Sections</h2>
        <ul className="explore-links">
          <li>
            <Link to="/grocery-list">Grocery List</Link>
          </li>
          <li>
            <Link to="/activities">Activities</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
      </div>
      <div className="advice">
        <h2>Advice of the Day</h2>
        <p>{advice}</p>
      </div>
    </div>
  );
};

export default HomePage;
