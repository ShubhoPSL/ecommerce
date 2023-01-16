import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import Card from "../Card/Card";
import { allProducts } from "../States/AllProducts";

function Products() {
  const [products, setProducts] = useRecoilState(allProducts);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  function fetchProducts() {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then(
        (data) => {
          setLoading(false);
          setProducts(data);
        },
        (error) => {
          setLoading(false);
          setError(true);
        }
      );
  }
  useEffect(() => {
    fetchProducts();
  });

  if (error) return <div className="error">404 Not Found!</div>;
  if (loading)
    return (
      <div className="loading">Please Wait! Something is cooking up...</div>
    );

  return (
    <div className="product-main-div">
      <h2 className="product-heading">All Products</h2>
      <hr />
      <div className="product-card-container">
        {products &&
          products[0].id !== 0 &&
          products.map((product) => (
            <Card product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}

export default Products;
