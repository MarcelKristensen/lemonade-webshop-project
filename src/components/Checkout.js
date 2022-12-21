import React from "react";
import "./Checkout.css";

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__background">
        <div>
          <h3>
            Total:
            <strong>{} DKK</strong>
          </h3>
        </div>
      </div>
    </div>
  );
}
