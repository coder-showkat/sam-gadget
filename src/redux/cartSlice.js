import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gadgets: [],
}

const cartSlice = createSlice({
    name: "sam-gadget",
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const item = state.gadgets.find(i=>i.id === action.payload.id);
            if (item) {
                if (item.quantity < 5) item.quantity++;
            }
            else state.gadgets.push({...action.payload, quantity: 1});
        },
        removeCart: (state, action)=>{
            const filteredItems = state.gadgets.filter(i=>i.id !== action.payload);
            state.gadgets = filteredItems;
        },
        changeQty: (state, action)=>{
            state.gadgets.find(i=>i.id === action.payload.id).quantity = action.payload.quantity;
        },
        clearCart: (state)=>{
            state.gadgets = [];
        }
    }
})

export const {addToCart, removeCart, changeQty, clearCart} = cartSlice.actions;

export default cartSlice.reducer;