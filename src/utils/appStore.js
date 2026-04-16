import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";

const appStore=configureStore({
    reducer:{
        cart:cartReducer, //this 'cart' is a slice of global store 
        auth:authReducer,
    },
});

// Save cart items to localStorage on every update
appStore.subscribe(() => {
    const items = appStore.getState().cart.items;
    localStorage.setItem("cartItems", JSON.stringify(items));
});

export default appStore