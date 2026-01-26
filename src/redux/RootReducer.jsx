import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './features/UserSlice';
import cartReducer from './features/CartSlice'

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default rootReducer