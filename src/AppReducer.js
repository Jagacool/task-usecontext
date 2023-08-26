const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Implement logic to add item to the cart
      return state;

    case "INCREASE_QUANTITY":
      // Implement logic to increase quantity of an item
      return state;

    case "DECREASE_QUANTITY":
      // Implement logic to decrease quantity of an item
      return state;

    default:
      return state;
  }
};

export default AppReducer;
