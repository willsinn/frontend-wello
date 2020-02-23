import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import userReducer from "./reducers/userReducer";
import boardsReducer from "./reducers/boardsReducer";
import workspaceReducer from "./reducers/workspaceReducer";
import * as serviceWorker from "./serviceWorker";
import { fetchUserBoards } from "./actions/boards";

import { fetchUser } from "./actions/user";

const rootReducer = combineReducers({
  userReducer: userReducer,
  boardsReducer: boardsReducer,
  workspaceReducer: workspaceReducer
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
console.log(
  `%c INITIAL REDUX STORE`,
  "color: purple",
  store.getState(workspaceReducer)
);

store.dispatch(fetchUser());
store.dispatch(fetchUserBoards());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
