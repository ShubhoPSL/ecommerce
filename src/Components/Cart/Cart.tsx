import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartProductArray } from "../DataTypes/CartProductArray";
// import { useLocalStorage } from "../../LocalStorage/LocalStorage";

import { cartItems } from "../States/CartItems";
import { CartTotal } from "../States/CartTotal";
import { DeleteIcon } from "../Icons/DeleteIcon";
import { AddIcon } from "../Icons/AddIcon";
import { Link } from "react-router-dom";

function Cart() {
  const [prods, setProds] = useRecoilState(cartItems);
  const totalAmount = useRecoilValue(CartTotal);
  // const [cartItem, setCartItem] = useLocalStorage<cartProductArray>("hi", []);

  function handleAddProduct(index: number) {
    return (event: React.MouseEvent<HTMLElement>) => {
      const updatedCount = prods[index].count + 1;
      const updatedItem = { ...prods[index], count: updatedCount };
      setProds([
        ...prods.slice(0, index),
        updatedItem,
        ...prods.slice(index + 1),
      ]);
    };
  }
  const handleRemoveProduct = (index: number) => {
    return (event: React.MouseEvent<HTMLElement>) => {
      let newProductList;
      prods[index].count > 1
        ? (newProductList = updateCountofItem(prods, index))
        : (newProductList = deleteItemFromList(prods, index));
      setProds(newProductList);
      event.preventDefault();
    };
  };
  function updateCountofItem(list: cartProductArray, index: number) {
    const updatedCount = list[index].count - 1;
    const updatedItem = { ...list[index], count: updatedCount };
    return [...list.slice(0, index), updatedItem, ...list.slice(index + 1)];
  }

  function deleteItemFromList(list: cartProductArray, index: number) {
    return [...list.slice(0, index), ...list.slice(index + 1)];
  }
  return (
    <div className="cart-main-container">
      <div className="cart-container-div">
        <div className="cart-bordered-div">
          <h1 className="cart-main-heading">Cart Items</h1>
          {prods.length === 0 ? (
            <div className="cart-empty-div">Currently no items in cart! </div>
          ) : prods[0].id === 0 ? (
            <div className="cart-empty-div">Currently no items in cart!</div>
          ) : (
            <>
              {prods.map((item, index) => (
                <div className="cart-items-div" key={item.id}>
                  <div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-item-image"
                    />
                  </div>
                  <div className="cart-item-info-div">
                    <p>
                      <span className="normal">Product Name:</span>
                      {item.title}
                    </p>

                    <p>
                      <span className="normal">Product Price:</span>$
                      {item.price}
                    </p>
                    <p>
                      <span className="normal">Product Count:</span>
                      {item.count}
                    </p>
                  </div>
                  <div className="cart-add-item-div">
                    <button title="add" onClick={handleAddProduct(index)}>
                      <AddIcon />
                    </button>
                  </div>
                  <div className="cart-delete-item-div">
                    <button title="delete" onClick={handleRemoveProduct(index)}>
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              ))}
              <p className="cart-total">Total Amount:${totalAmount}</p>
              <Link to="CartSummary">
                <button title="Checkout" className="cart-checkout-btn">
                  <span className="inline-flex">Checkout</span>
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
