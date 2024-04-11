import React, { useState, useEffect } from 'react';
import './GroceryListPage.css'; // Import your CSS file for styling

const GroceryListPage = () => {
  // Initialize groceryItems state with items from localStorage, if any
  const [groceryItems, setGroceryItems] = useState(
    JSON.parse(localStorage.getItem('groceryItems')) || []
  );
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Save groceryItems to localStorage whenever it changes
    localStorage.setItem('groceryItems', JSON.stringify(groceryItems));
  }, [groceryItems]);

  const addItemToList = () => {
    if (inputValue.trim() !== '') {
      const newItem = { name: inputValue };
      setGroceryItems([...groceryItems, newItem]);
      setInputValue('');
    }
  };

  const deleteItemFromList = (index) => {
    const updatedItems = [...groceryItems];
    // Remove the item at the specified index
    updatedItems.splice(index, 1);
    // Update the groceryItems state with the new array
    setGroceryItems(updatedItems);
  };

  return (
    <div>
      <h1>Grocery Shopping List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter item"
        />
        <button onClick={addItemToList}>Add Item</button>
      </div>
      <ul>
        {groceryItems.map((item, index) => (
          <li key={index}>
            {item.name}
            <button className="delete-button" onClick={() => deleteItemFromList(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryListPage;
