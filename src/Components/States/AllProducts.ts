import { atom } from "recoil";

export const allProducts = atom({
    key: "allProducts",
    default: [
      {
          id: 0,
          title : "",
          price: 0,
          image: "",
          } 
    ],
  });