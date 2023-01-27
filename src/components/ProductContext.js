import React, { useReducer, createContext } from "react";

export const CartContext = createContext();
const initialState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case "addToCart":
      return [];
    case "increment":
      return [...state, action.product];
    case "decrement":
      const productIndex = state.findIndex(
        (item) => item.name === action.product.name
      );
      if (productIndex) {
        return state;
      }
      const update = [...state];
      update.splice(productIndex, 1);
      return update;
    default:
      throw new Error();
  }
}

function ProductProvider({ children }) {
  const [cart, setCart] = useReducer(cartReducer, initialState);
  const value = { cart, setCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { ProductProvider };
