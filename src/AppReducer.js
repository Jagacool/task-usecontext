const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newBook = {
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        quantity: 1,
      };
      return {
        ...state,
        cart: [...state.cart, newBook],
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};

export default AppReducer;
