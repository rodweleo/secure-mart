import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"
import { loadReduxCartState } from "../helpers/reduxStateStorage";

const preloadedCartState = loadReduxCartState()

export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
    preloadedState: preloadedCartState
})


