import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Route || MV - Changed to Routes and Route
import HomePage from './components/HomePage';
import GroceryListPage from './components/GroceryListPage';
import ActivitiesPage from './components/ActivitiesPage';
import ArticlesPage from './components/ArticlesPage';
import Navbar from './components/Navbar'; // Import the Navbar component
// Added <BrowserRouter> Tags to index.js surrounding the application so that it can watch, and imported the BrowserRouter
const App = () => {
  return (
    
      <div>
        <Navbar /> {/* Render the Navbar component */}

        
        {/* Changed Switch to Routes*/}
        <Routes>
            {/* In Route we changed component to element, and call the element with the tag < /> setup.*/}
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/grocery-list" element={<GroceryListPage/>} />
          <Route path="/activities" element={<ActivitiesPage/>} />
          <Route path="/articles" element={<ArticlesPage/>} />
          <Route path="*" element={<HomePage/>} />         {/* The "*" will take anything not matched in the other Routes*/}
        </Routes>
      </div>
    
  );
};

export default App;
