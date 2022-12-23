import React, { useContext } from "react";
import { CartContext } from "./Product";
import "./Cart.css";

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

function getTotal(cart) {
  const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
  return total.toLocaleString(undefined, currencyOptions);
}

export default function Cart() {
  const { cart } = useContext(CartContext);
  const { setCart } = useContext(CartContext);

  function add(product) {
    setCart({ product, type: "add" });
  }

  function remove(product) {
    setCart({ product, type: "remove" });
  }
  return (
    <section className="cart">
      <div className="cart__left">
        <div>
          <h3>Shopping Cart</h3>
          {cart?.map((product) => (
            <div key={product.id}>
              <div className="cartProduct">
                <img
                  className="cartProduct__image"
                  src={process.env.PUBLIC_URL + `/Images/${product.img}`}
                  alt="product"
                />

                <div className="cartProduct__info">
                  <p className="cartProduct__title">{product.name}</p>
                  <p className="cartProduct__price">
                    <strong>{product.price}</strong>
                    <small> DKK</small>
                  </p>

                  <div className="cartProduct__incrDec">
                    <button onClick={() => add(product)}>+</button>
                    <button onClick={() => remove(product)}>-</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
