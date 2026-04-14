import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], // [{ ...itemData, quantity: 1 }]
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            // Check if item already exists in cart (using card.info.id which is unique)
            const existingItem = state.items.find((i) => i.card.info.id === item.card.info.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
        },
        decrementItem: (state, action) => {
            const itemId = action.payload; // Just send the ID
            const item = state.items.find((i) => i.card.info.id === itemId);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter((i) => i.card.info.id !== itemId);
                }
            }
        },
        removeSpecificItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((i) => i.card.info.id !== itemId);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, decrementItem, removeSpecificItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;