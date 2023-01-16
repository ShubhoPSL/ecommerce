import React from "react";
import { useRecoilValue } from "recoil";
import { SucessIcon } from "../../Icons/Icons";

import { cartItems } from "../../States/CartItems";
import { CartTotal } from "../../States/CartTotal";

const CartSummary = () => {
  const products = useRecoilValue(cartItems);
  const amount = useRecoilValue(CartTotal);
  return (
    <div>
      <div className="cart-summary-container-main">Order Summary</div>
      <hr className="cart-summary-hr" />
      <div className="cart-summary-container">
        <div className="cart-summary-bordered-div">
          <div className="icon">
            <SucessIcon />
          </div>
          <p className="cart-summary-success">Order Successful</p>
          <hr className="cart-summary-divide" />
          <p className="cart-summary-products">Products</p>
          {products.map((product) => (
            <>
              <div className="cart-summary-info">
                <p>Product Name: {product.title}</p>
                <p>Product Price: ${product.price}</p>
                <p>Product Quantity: {product.count}</p>
              </div>
            </>
          ))}
          <hr className="cart-summary-product-divide" />
          <p className="cart-summary-total">Total: ${amount}</p>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
