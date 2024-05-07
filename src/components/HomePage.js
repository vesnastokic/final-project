import React, { useState, useEffect } from "react"; // Import React and necessary hooks
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import "./HomePage.css"; // Import CSS for styling the HomePage
import "./background.css"; // Import background CSS

// Functional component for rendering the HomePage
const HomePage = () => {
  // State hook to manage the advice of the day
  const [advice, setAdvice] = useState("");

  // Effect hook to fetch advice of the day when the component mounts
  useEffect(() => {
    // Function to fetch advice of the day
    const fetchAdvice = async () => {
      try {
        // Fetch advice from external API
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json(); // Convert response to JSON
        // Set the advice state with the fetched advice
        setAdvice(data.slip.advice);
      } catch (error) {
        console.error("Error fetching advice:", error);
      }
    };

    // Call the fetchAdvice function
    fetchAdvice();
  }, []);

  // Return the JSX for rendering the HomePage component
  return (
    <div className="home-page">
      {/* Heading for the home page */}
      <h1>Welcome to Stay at Home Moms</h1>
      {/* Image for the home page */}
      <img
        src="https://d.newsweek.com/en/full/2060197/frustrated-mom.webp?w=790&f=b993fd81d976e147d5f22e2bddd11577"
        alt="Welcome"
      />
      {/* Paragraph with information about the site */}
      <p>
        Here, you're not alone. We understand the challenges you face every day.
        This site is here to support you, offering tools to help you organize
        your day, insightful articles to guide you, and fun activities to enjoy
        with your kids.
      </p>
      {/* Section for exploring different sections of the site */}
      <div className="section-links">
        <h2>Explore Our Sections</h2>
        <ul className="explore-links">
          {/* Links to different sections */}
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
      {/* Section to display the advice of the day */}
      <div className="advice">
        <h2>Advice of the Day</h2>
        <p>{advice}</p>
      </div>
      {/* Section to display the symbol of motherhood */}
      <div className="motherhood-section">
        <h2>Symbol of Motherhood</h2>
        <img
          src="https://ih1.redbubble.net/image.546075869.0495/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
          alt="Symbol of Motherhood"
          className="motherhood-image"
        />
      </div>
    </div>
  );
};

export default HomePage; // Export the HomePage component as the default export
