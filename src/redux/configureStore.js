import { configureStore } from "@reduxjs/toolkit";
import { entranceReducer } from "./metaInfoSlice";
import { servicesReducer } from "./serviceSlice";

export const store = configureStore({
    reducer: {
        metaInfo: entranceReducer,
        search: servicesReducer
    }
})