import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        cartReducer: cartSlice.reducer,
    }
});

export default store;