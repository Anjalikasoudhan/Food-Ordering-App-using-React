import { createSlice } from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[], //our cart starts empty
    },
    reducers:{
        //action is what we send (the food item)
        addItem:(state,action)=>{
            // In Redux Toolkit, we can "mutate" the state directly (Immer handles it)
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        },
    },
});

export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;