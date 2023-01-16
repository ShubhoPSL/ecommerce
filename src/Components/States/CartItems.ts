import { atom } from "recoil";

export const cartItems = atom({
  key: "cartItems",
  default: [
    {
        id: 0,
        title : "",
        price: 0,
        category: "",
        image: "",
        count: 0,
        } 
  ],
});