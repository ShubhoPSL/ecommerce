import { selector } from "recoil";
import { cartItems } from "./CartItems";

export const TotalItemsInCart =selector({
    key: "totalItems",
    get:({get})=>{
        const cart=get(cartItems)
        var totalItems=0
        cart.forEach((item)=>{
            totalItems=totalItems+item.count
        })

        return totalItems
    }
})