import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../app/features/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})
export default store;