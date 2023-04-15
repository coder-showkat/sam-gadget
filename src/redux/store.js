import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import persistReducer from "redux-persist/es/persistReducer";
import thunk from 'redux-thunk';
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
import cartReducer from "./cartSlice";

const persistConfig = {
    key: "root",
    storage: storageSession,
}

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})
export default store;

export const persistor = persistStore(store);