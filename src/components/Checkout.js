import React, { useContext } from "react";
import { CartContext } from "./Product";
import "./Checkout.css";

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

function getTotal(cart) {
  const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
  return total.toLocaleString(undefined, currencyOptions);
}

export default function Checkout() {
  const { cart } = useContext(CartContext);

  return (
    <div className="checkout">
      <div className="checkout__right">
        <span>
          <h3>
            <strong className="strong-price">
              {" "}
              Total: {getTotal(cart)} DKK
            </strong>
            <strong className="strong-quantity">
              {" "}
              Quantity: {cart.length}
            </strong>
          </h3>
        </span>
      </div>
    </div>
  );
}
