// src/context/AppReducer.js
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Find the product with the specified ID
      const productToAdd = state.products.find(
        (product) => product.id === action.payload.productId
      );

      // Check if the product is already in the cart
      const existingCartItem = state.cart.find(
        (item) => item.product.id === productToAdd.id
      );

      if (existingCartItem) {
        // If the product is already in the cart, increase its quantity
        const updatedCart = state.cart.map((item) =>
          item.product.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cart: updatedCart };
      } else {
        // If the product is not in the cart, add it
        const newCartItem = {
          product: productToAdd,
          quantity: 1,
        };
        return { ...state, cart: [...state.cart, newCartItem] };
      }

    case "INCREASE_QUANTITY":
      const updatedCartInc = state.cart.map((item) =>
        item.product.id === action.payload.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, cart: updatedCartInc };

    case "DECREASE_QUANTITY":
      const updatedCartDec = state.cart.map((item) =>
        item.product.id === action.payload.productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return { ...state, cart: updatedCartDec };

    default:
      return state;
  }
};

export default AppReducer;
