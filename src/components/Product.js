import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
      {/* Display product details */}
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      {/* Add to cart button */}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
