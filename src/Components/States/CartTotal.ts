import { selector } from "recoil";
import { cartItems } from "./CartItems";

export const CartTotal=selector({
    key:"cartValue",
    get:({get})=>{
        const cart=get(cartItems)
        var totalAmount=0
        cart.forEach((item)=>{
            totalAmount=totalAmount+item.price*item.count
        })
        let finalAmount=Math.round(totalAmount*(10^2))/(10^2)
        return finalAmount
    }
})