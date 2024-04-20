import React from "react";
import { Routes, Route } from "react-router-dom"; 
import HomePage from "./components/HomePage";
import GroceryListPage from "./components/GroceryListPage";
import ActivitiesPage from "./components/ActivitiesPage";
import ArticlesPage from "./components/ArticlesPage";
import Navbar from "./components/Navbar"; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/grocery-list" element={<GroceryListPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="*" element={<HomePage />} /> 
      </Routes>
    </div>
  );
};

export default App;
