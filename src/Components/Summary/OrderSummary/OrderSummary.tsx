import React from "react";
import { useParams } from "react-router";
import { useRecoilValue } from "recoil";
import { SucessIcon } from "../../Icons/SuccessIcon";
import { allProducts } from "../../States/AllProducts";

const OrderSummary = () => {
  const { id } = useParams();
  console.log(id);
  const p_id = Number(id);
  const products = useRecoilValue(allProducts);
  const product = products.filter((item) => item.id === p_id);

  console.log(products);

  return (
    <div>
      <div className="order-summary-heading">Order Summary</div>
      <hr className="order-summary-hr" />
      <div className="order-summary-container-div">
        <div className="order-summary-inner-div">
          <SucessIcon />
          <p className="order-summary-success-para">Order Successful</p>
          <br />
          <div className="order-summary-info-div">
            <p>
              <span className="bold">Product Name: </span>
              {product[0].title}
            </p>
            <p>
              <span className="bold">Product Category: </span>
              {product[0].category}
            </p>
            <p>
              <span className="bold">Product Price: </span>
              {product[0].price}
            </p>
          </div>
          <br />
          <p className="bold">Total: ₹{product[0].price}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
