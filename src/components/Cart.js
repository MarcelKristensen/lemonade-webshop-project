import React, { useContext } from "react";
import { CartContext } from "./Product";
import "./Cart.css";

export default function Cart() {
  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3>Shopping Cart</h3>
        </div>
      </div>
      <div></div>
    </div>
  );
}
