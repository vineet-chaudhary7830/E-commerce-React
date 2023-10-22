import React, { createContext, useState } from "react";
import all_product from '../Components/assests/all_product';

export const  ShopContext = createContext(null);
const getDeafultCart=()=>{
    let cart ={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart;
}
const ShopContextProvider = (props)=>{
   
    const [cartItems,setCartItems] = useState(getDeafultCart());
   

    const addToCart  = (ItemId)=>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
        console.log(cartItems);
    }
    const removefromCart  = (ItemId)=>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
    }

    const contextValue = {all_product,cartItems,addToCart,removefromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
            </ShopContext.Provider>
    )
    }
export default ShopContextProvider;