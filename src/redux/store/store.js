import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reduce/cart";

const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})

export default store