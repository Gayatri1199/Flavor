import {configureStore} from '@reduxjs/toolkit'
import CartSlice from "./slices/CartSlice"
import CategorySlice from "./slices/CategorySlice"
import uiReducer from "./slices/uiSlice";
import SearchSlice from "./slices/searchSlice";



const Store = configureStore({
    reducer:{
        cart:CartSlice,
        category:CategorySlice,
        ui: uiReducer,
        search:SearchSlice
    },
   
});

export default Store;