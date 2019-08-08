import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import App from "./App";
const rootReducer = combineReducers({ userReducer: userReducer });
const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
