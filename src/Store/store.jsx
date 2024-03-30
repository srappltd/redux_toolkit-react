import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './userReducer'
import ProductReducer from './PostReducer'

export const store = configureStore({
    reducer:{
        UserReducer,
        ProductReducer
    }
})