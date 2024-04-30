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

export default GroceryListPage;

