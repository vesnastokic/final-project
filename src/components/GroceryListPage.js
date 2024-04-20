import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GroceryListPage.css";
import RemoveIcon from "./RemoveIcon"

const GroceryListPage = () => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Fetch grocery items from MockAPI when component mounts
    fetchGroceryItems();
  }, []);

  const fetchGroceryItems = async () => {
    try {
      const response = await axios.get(
        "https://65eb6eee43ce16418933d902.mockapi.io/groceries"
      );
      setGroceryItems(response.data);
    } catch (error) {
      console.error("Error fetching grocery items:", error);
    }
  };

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

  // Function to add new data to the mock API
  const postData = async () => {
    try {
      const newItem = { name: "New Grocery Item", quantity: 1 };
      const response = await axios.post(
        "https://65eb6eee43ce16418933d902.mockapi.io/groceries",
        newItem
      );
      console.log("Grocery item added successfully!", response.data);
      // Update grocery items after successful addition
      fetchGroceryItems();
    } catch (error) {
      console.error("Failed to add grocery item:", error.message);
    }
  };

  return (
    <div className="container">
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
      {/* Button to trigger the postData function */}
      <button onClick={postData}>Add New Grocery Item</button>
    </div>
  );
};

export default GroceryListPage;

