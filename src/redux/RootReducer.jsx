import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './features/UserSlice'

const rootReducer = combineReducers({
    user: userReducer,
})

export default rootReducer