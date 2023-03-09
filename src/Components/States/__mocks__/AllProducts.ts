import { atom } from "recoil";
import { Data } from "../../../Data API/Data";

export const AllProducts = atom({
  key: "allProducts",
  default: Data,
});