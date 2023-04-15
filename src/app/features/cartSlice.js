import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addTodb, clearCart, getLocalStorageData, removeFromDb } from "../../utilities/fakedb";

const getCartItems = async () => {
    const res = await axios.get("products.json");
      const localStorageData = await getLocalStorageData();
        const items = [];
        
        if (localStorageData) {
            for( let i in localStorageData) {
                const item = res.data.find(x=>x.id === i);
                
                if (item) {
                    item.quantity = localStorageData[i];
                    items.push(item);
                };
            }
        }
        return items;
} 


export const fetchData = createAsyncThunk("carts/getCartItems", (arr = [])=>{
    const [method, id] = arr;
    if (method === "add") {
        addTodb(id);
    } else if (method === "remove") {
        removeFromDb(id);
    } else if (method === "clear") {
        clearCart();
    }

    return getCartItems();
});



const cartSlice = createSlice({
    name: "carts",
    initialState: {carts: [], loading: false, error: null},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, state=> {
            state.loading = true;
        })
        builder.addCase(fetchData.fulfilled, (state, action)=>{
            state.loading = false;
            state.carts = action.payload;
            state.error = null;
        })
        builder.addCase(fetchData.rejected, (state, action)=>{
            state.loading = false;
            state.carts = [];
            state.error = action.error.message
        })
    }
});


export default cartSlice.reducer;