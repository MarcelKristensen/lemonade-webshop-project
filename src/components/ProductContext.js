import React, { useReducer, createContext } from "react";

export const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.product];
    case "remove":
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
      return state;
  }
}

function ProductProvider({ children }) {
  const [cart, setCart] = useReducer(cartReducer, []);
  const value = { cart, setCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { ProductProvider };
