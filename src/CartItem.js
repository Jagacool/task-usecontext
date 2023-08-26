import React from "react";
import { useGlobalContext } from "./GlobalContext";

const CartItem = ({ item }) => {
  const { dispatch } = useGlobalContext();

  const increaseQuantity = () => {
    dispatch({ type: "INCREASE_QUANTITY", payload: item.id });
  };

  const decreaseQuantity = () => {
    dispatch({ type: "DECREASE_QUANTITY", payload: item.id });
  };

  return (
    <div className="cart-item">
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={increaseQuantity}>Increase</button>
      <button onClick={decreaseQuantity}>Decrease</button>
    </div>
  );
};

export default CartItem;
