import "./Total.css";
import { CartContext } from "./ProductContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

function getTotal(cart) {
  const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
  return total.toLocaleString(undefined, currencyOptions);
}

export default function Total() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  var showButton;
  if (getTotal(cart) <= 0) {
    <button className="total__button">Empty basket</button>;
  } else {
    showButton = (
      <button onClick={() => navigate("/checkout")} className="total__button">
        Proceed to Checkout
      </button>
    );
  }

  return (
    <div className="total">
      <div>
        <p className="total__p">
          Subtotal ({cart.length} items): <strong>{getTotal(cart)} DKK</strong>
          {showButton}
        </p>
      </div>
    </div>
  );
}
