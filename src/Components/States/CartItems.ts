import { atom } from "recoil";

export const cartItems = atom({
  key: "cartItems",
  default: [
    {
        id: 0,
        title : "",
        price: 0,
        
        image: "",
        count: 0,
        } 
  ],
});