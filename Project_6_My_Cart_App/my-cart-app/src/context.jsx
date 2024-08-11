/* eslint-disable */
import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";

// API endpoint for fetching cart items
// const url = "https://course-api.com/react-useReducer-cart-project";
const url = "/api/react-useReducer-cart-project";


// Create a context for global state management
const AppContext = React.createContext();

// Initial state for the shopping cart
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

// AppProvider component to wrap the app and provide context
const AppProvider = ({ children }) => {
  // Use useReducer for state management
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to clear all items from the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Function to remove a specific item from the cart
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  // Function to increase the quantity of an item
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  // Function to decrease the quantity of an item
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  // Function to fetch cart data from API
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  // Function to toggle item quantity (increase or decrease)
  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Update totals when cart changes
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  // Provide the state and functions through context
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the global context
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
