import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";

const store = configureStore({
    reducer:{
        restaurants : slice
    }
})


export default store