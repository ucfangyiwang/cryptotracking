import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import { cryptoApi } from "./cryptoApi";

export const store=configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware)
})