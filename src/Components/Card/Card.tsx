import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import { CartProducts } from "../DataTypes/CartProducts";
import { Product } from "../DataTypes/Product";
import { cartItems } from "../States/CartItems";

function Card(props: { product: Product }) {
  const { product } = props;
  const [cartItem, setCartItem] = useRecoilState(cartItems);
  const handleAddtoCart = () => {
    const indexInCart = cartItem.findIndex((item) => item.id === product.id);
    let newItem: CartProducts;
    indexInCart === -1
      ? (newItem = { ...product, count: 1 })
      : (newItem = {
          ...cartItem[indexInCart],
          count: cartItem[indexInCart].count + 1,
        });

    cartItem[0].id === 0
      ? setCartItem([{ ...product, count: 1 }])
      : indexInCart === -1
      ? setCartItem([...cartItem, newItem])
      : setCartItem([
          ...cartItem.slice(0, indexInCart),
          newItem,
          ...cartItem.slice(indexInCart + 1),
        ]);
    alert("Item added to Cart!");
  };

  return (
    <div className="card-container-div">
      <img src={product.image} alt="Cannot be displayed" className="card-img" />
      <p className="card-para">{product.title}</p>
      <p className="card-para">Category: {product.category}</p>
      <p className="card-para">Price: ${product.price}</p>
      <Link to={`/OrderSummary/${product.id}`}>
        <button className="card-btn-buy">Buy Now</button>
      </Link>
      <button className="card-btn-cart" onClick={() => handleAddtoCart()}>
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
