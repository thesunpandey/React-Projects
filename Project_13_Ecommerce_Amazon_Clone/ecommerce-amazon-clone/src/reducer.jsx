// Define the application-level states and actions to update the state

export const initialState = {
  basket: [],
};

// Selector to calculate the total price of items in the basket
export const getBasketTotal = (basket) =>
  basket?.reduce((total, item) => total + item.price, 0) || 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET": {
      const newBasket = state.basket.filter(
        (basketItem) => basketItem.id !== action.id
      );

      if (newBasket.length === state.basket.length) {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    }

    default:
      return state;
  }
};

export default reducer;