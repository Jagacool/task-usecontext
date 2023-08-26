// src/context/context.js
import React, { createContext, useReducer, useContext } from "react";
import AppReducer from "./AppReducer";
import jsonData from "../data.json";

// Create context
export const GlobalContext = createContext();

// Provider component
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, {
    cart: [],
    products: jsonData.products,
  });

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the context
export const useGlobalContext = () => useContext(GlobalContext);
