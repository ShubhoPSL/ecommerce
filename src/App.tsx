import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Welcome from "./Components/Welcome/Welcome";
import Home from "./Components/Home/Home";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import ContactUs from "./Components/ContactUs/ContactUs";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import CartSummary from "./Components/Summary/CartSummary/CartSummary";
import OrderSummary from "./Components/Summary/OrderSummary/OrderSummary";

function App() {
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/CartSummary" element={<CartSummary />} />
            <Route path="/OrderSummary/:id" element={<OrderSummary />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
