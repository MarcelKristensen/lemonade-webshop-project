import React, { useContext } from "react";
import { CartContext } from "../components/ProductContext";
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
        <div className="checkout__background">
          <div>
            <h3>
              Total:
              <strong>{getTotal(cart)} DKK</strong>
            </h3>
            {cart?.map((item) => (
              <div className="checkout_in">
              <img
                className="checkout__image"
                src={process.env.PUBLIC_URL + `/Images/${item.img}`}
                alt="item"
              />
              <div className="checkout__info">
                <p className="checkout__title">{item.name}</p>
                <p className="checkout__price">
                  <strong>{item.price}</strong>
                  <small> DKK</small>
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
