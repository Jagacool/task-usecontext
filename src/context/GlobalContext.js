// src/context/GlobalContext.js
import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  products: [], // Replace with your product data
  cart: [],
};

const GlobalContext = createContext(initialState);

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
