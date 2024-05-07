import React from "react"; // Import React library
import { Routes, Route } from "react-router-dom"; // Import necessary components from react-router-dom
import HomePage from "./components/HomePage"; // Import HomePage component
import GroceryListPage from "./components/GroceryListPage"; // Import GroceryListPage component
import ActivitiesPage from "./components/ActivitiesPage"; // Import ActivitiesPage component
import ArticlesPage from "./components/ArticlesPage"; // Import ArticlesPage component
import Navbar from "./components/Navbar"; // Import Navbar component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
  return (
    <div>
      <Navbar /> {/* Render Navbar component */}
      <Routes>
        {/* Define routes for different pages */}
        <Route exact path="/" element={<HomePage />} /> {/* Render HomePage component for the root route */}
        <Route path="/grocery-list" element={<GroceryListPage />} /> {/* Render GroceryListPage component for the /grocery-list route */}
        <Route path="/activities" element={<ActivitiesPage />} /> {/* Render ActivitiesPage component for the /activities route */}
        <Route path="/articles" element={<ArticlesPage />} /> {/* Render ArticlesPage component for the /articles route */}
        <Route path="*" element={<HomePage />} /> {/* Render HomePage component for any other unknown routes */}
      </Routes>
    </div>
  );
};

export default App; // Export the App component as the default export
