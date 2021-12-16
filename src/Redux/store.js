import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
    reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);
