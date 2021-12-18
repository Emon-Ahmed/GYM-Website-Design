import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/userSlice"
import classesReducer from "./classes/classesSlice"
import customerReducer from "./user/customerSlice"

export default combineReducers({ auth:authReducer, classes:classesReducer, customer: customerReducer })