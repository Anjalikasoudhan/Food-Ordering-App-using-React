import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";

const appStore=configureStore({
    reducer:{
        cart:cartReducer, //this 'cart' is a slice of global store 
        auth:authReducer,
    },
});

export default appStore