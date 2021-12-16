import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/userSlice"

export default combineReducers({ auth:authReducer })