import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { CartContext } from "./Product";

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

function getTotal(cart) {
  const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
  return total.toLocaleString(undefined, currencyOptions);
}

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <nav>
      <img
        src="Images/lemonadeLogo.png"
        className="nav__icon"
        alt="Lemonade Logo"
      />
      <h3 className="nav__logo_text">Lemonade Webshop</h3>
      <p>{getTotal(cart)}</p>
      <div className="shopping__cart" onClick={() => navigate("/cart")}>
        <img
          src="Images/Cart.png"
          className="shopping__cart"
          alt="Lemonade Logo"
        />
        <p>{cart.length}</p>
      </div>
    </nav>
  );
}
