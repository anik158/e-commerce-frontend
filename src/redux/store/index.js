import {combineReducers, confgureStore, configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";
import cartReducer from "../slices/cartSlice.js";

const rootReducer = combineReducers({
    cart: cartReducer,
})


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
})

const persistStore = persistStore(store);

export {
    store,
    persistStore,
}