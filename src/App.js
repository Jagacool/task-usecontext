import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="app">
      <CartProvider>
        <ProductList />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
