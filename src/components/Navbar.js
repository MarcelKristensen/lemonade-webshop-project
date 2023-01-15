import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./ProductContext";
import "./Navbar.css";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  
  return (
    <nav>
      <img
        src="Images/lemonadeLogo.png"
        className="nav__icon"
        alt="Lemonade Logo"
        onClick={() => navigate("/")}
      />
      <h3 className="nav__logo_text">Lemonade Webshop</h3>
      <div className="shopping__cart" onClick={() => navigate("/cart")}>
        <img
          src="Images/Cart.png"
          className="shopping__cart"
          alt="Lemonade Logo"
          onClick={() => navigate("/")}
        />
        <p>{cart.length}</p>
      </div>
    </nav>
  );
}