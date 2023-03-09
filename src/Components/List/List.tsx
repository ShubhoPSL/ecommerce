import React from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { listData } from "../DataTypes/listData";
import { TotalItemsInCart } from "../States/TotalItemsInCart";
import { CartIcon } from "../Icons/CartIcon";
const List = ({ data }: { data: listData }) => {
  const totalItems = useRecoilValue(TotalItemsInCart);
  return (
    <li className="nav-li">
      <Link to={data.route}>
        {data.name === "Cart" ? (
          <div className="cart-div">
            <CartIcon />
            <p className="cart-para">{totalItems}</p>
          </div>
        ) : (
          data.name
        )}
      </Link>
    </li>
  );
};

export default List;
