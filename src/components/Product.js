import React, { useReducer, createContext } from "react";
import "./Product.css";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Checkout from "./Checkout";

const products = [
  {
    id: 1,
    img: "lemonade3.jpg",
    name: "Lemonade",
    description: "Quenches the thirst like no other for a fair price.",
    quantity: 385,
    price: 15,
  },
  {
    id: 2,
    img: "lemonade2.jpg",
    name: "Lemonade delight",
    description: "The most delightful lemonade across the world!",
    quantity: 0,
    price: 20,
  },
  {
    id: 3,
    img: "lemonade1.jpg",
    name: "Lemonade deluxe",
    description:
      "Lemonade made from the finest of lemons imported from lemonland",
    quantity: 247,
    price: 25,
  },
  {
    id: 4,
    img: "lemonade4.jpg",
    name: "Lemonade premium",
    description: "Made from the most exquisite and exotic lemons",
    quantity: 174,
    price: 30,
  },
  {
    id: 5,
    img: "lemonade5.jpg",
    name: "Le lemon de je nade",
    description:
      "Fabriqué à partir de vieux citrons moisis, mais vous ne le sauriez pas à moins de parler français",
    quantity: 12,
    price: 35,
  },
  {
    id: 6,
    img: "lemonade6.jpg",
    name: "Lemon",
    description: "It's literally just a lemon.",
    quantity: 856,
    price: 5,
  },
];

export const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.product];
    case "remove":
      const productIndex = state.findIndex(
        (item) => item.name === action.product.name
      );
      if (productIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(productIndex, 1);
      return update;
    default:
      return state;
  }
}

export default function Product() {
  const [cart, setCart] = useReducer(cartReducer, []);

  function add(product) {
    setCart({ product, type: "add" });
  }
  
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Navbar />
      <section className="products__list">
        {products.map((product) => (
          <div key={product.name}>
            <div className="product">
              <img
                src={process.env.PUBLIC_URL + `/Images/${product.img}`}
                className="product__image"
                alt="Lemonade img"
              />
              <p className="product__name">{product.name}</p>
              <p className="product__price">
                <span className="product__price">{product.price}</span> DKK
              </p>
              <p className="product__description">{product.description}</p>
              <button className="product__button" onClick={() => add(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
      <Checkout />
      <Cart />
    </CartContext.Provider>
  );
}
