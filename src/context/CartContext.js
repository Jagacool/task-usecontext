import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Implement logic to add item to cart
  };

  const increaseQuantity = (product) => {
    // Implement logic to increase quantity
  };

  const decreaseQuantity = (product) => {
    // Implement logic to decrease quantity
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
