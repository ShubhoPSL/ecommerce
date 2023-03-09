import { atom } from "recoil";

export const cartItems = atom({
  key: "cartItems",
  default: [
    {
      id: 1,
        title : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        count: 120,
    },
  ],
});