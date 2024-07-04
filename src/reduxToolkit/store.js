import { configureStore } from "@reduxjs/toolkit";
import reducer from './slice'
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { thunk } from 'redux-thunk';
import { Tuple } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: {
        reducer1: persistedReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: () => new Tuple(thunk)
})

export const persistor= persistStore(store);