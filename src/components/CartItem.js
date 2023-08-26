import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ cartItem }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div className="cart-item">
      <h4>{cartItem.product.title}</h4>
      <p>Quantity: {cartItem.quantity}</p>
      <button onClick={() => decreaseQuantity(cartItem.product)}>-</button>
      <button onClick={() => increaseQuantity(cartItem.product)}>+</button>
    </div>
  );
};

export default CartItem;
