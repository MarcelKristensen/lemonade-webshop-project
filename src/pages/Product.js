import React, { useContext } from "react";
import { CartContext } from "../components/ProductContext";
import "./Product.css";

export default function Product() {
  const { setCart } = useContext(CartContext);

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

  function add(product) {
    setCart({ product, type: "add" });
  }

  return (
    <section className="products__list">
      {products.map((product) => (
        <div key={product.id}>
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
  );
}
