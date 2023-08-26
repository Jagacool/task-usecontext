import React from "react";
import { useGlobalContext } from "./GlobalContext";
import CartItem from "./CartItem";

const CartPage = () => {
  const { state } = useGlobalContext();

  const totalQuantity = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = state.cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {state.cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
};

export default CartPage;
