import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <p className="home-body">
        ShopKart is the fastest growing e-commerce platform of US! Launched in
        2019, it has delivered over 70 million+ products and even during the
        Covid-19 Lockdown. You can shop anything you want, including daily
        groceries and medicines. In short, a one-stop shop for everything that
        you need and craved for!
      </p>
      <br />
      <h1 className="catchy-tagline">What are you waiting for?!</h1>
      <Link to="/products">
        <button className="shopping-btn">Let's go Shopping!</button>
      </Link>
    </div>
  );
}

export default Home;
