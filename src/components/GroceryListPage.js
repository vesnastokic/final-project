import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import "./GroceryListPage.css"; // Import RemoveIcon component
import RemoveIcon from "./RemoveIcon" // Import CSS for styling the GroceryListPage
import './background.css'; // Import background CSS

// Functional component for rendering the GroceryListPage
const GroceryListPage = () => {
  // State hook to manage grocery items and input value
  const [groceryItems, setGroceryItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

// Effect hook to fetch grocery items when the component mounts
   useEffect(() => {
    // Fetch grocery items from MockAPI when component mounts
    fetchGroceryItems();
  }, []);

  const fetchGroceryItems = async () => {
    try {
      const response = await axios.get(
        "https://65eb6eee43ce16418933d902.mockapi.io/groceries"
      );
      // Update grocery items state with fetched data
      setGroceryItems(response.data);
    } catch (error) {
      console.error("Error fetching grocery items:", error);
    }
  };
  // Function to add an item to the grocery list
  const addItemToList = async (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      try {
        const newItem = { name: inputValue };
        await axios.post(
          "https://65eb6eee43ce16418933d902.mockapi.io/groceries",
          newItem
        );
        // Update grocery items after successful addition
        fetchGroceryItems();
        setInputValue("");
      } catch (error) {
        console.error("Error adding grocery item:", error);
      }
    }
  };
// Function to delete an item from the grocery list
  const deleteItemFromList = async (id) => {
    try {
      await axios.delete(
        `https://65eb6eee43ce16418933d902.mockapi.io/groceries/${id}`
      );
      // Update grocery items after successful deletion
      fetchGroceryItems();
    } catch (error) {
      console.error("Error deleting grocery item:", error);
    }
  };
// Return the JSX for rendering the GroceryListPage component
  return (
    <div className="grocery-container">
      <h1>Grocery Shopping List</h1>
      <div>
        <form>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter item"
          />
          <button type="submit" onClick={(e) => addItemToList(e)}>
            Add Item
          </button>
        </form>
      </div>
      <ul className="list-unstyled">
        {groceryItems.map((item) => (
          <li key={item.id} className="text-capitalize fw-bold">
            {item.name}
            <button
              className="delete-button mx-2 my-0 py-0"
              onClick={() => deleteItemFromList(item.id)}
            >
              <RemoveIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
// Export the GroceryListPage component as the default export
export default GroceryListPage;