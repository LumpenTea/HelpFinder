import { configureStore } from "@reduxjs/toolkit";
import { entranceReducer } from "./metaInfoSlice";
import { servicesReducer } from "./serviceSlice";
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        metaInfo: entranceReducer,
        search: servicesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;