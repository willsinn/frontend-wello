import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { Router } from "react-router-dom";

import App from "./App";
import userReducer from "./reducers/userReducer";
import boardsReducer from "./reducers/boardsReducer";
import workspaceReducer from "./reducers/workspaceReducer";
import checklistsReducer from "./reducers/checklistsReducer";
import labelsReducer from "./reducers/labelsReducer";
import archiveReducer from "./reducers/archiveReducer";

import * as serviceWorker from "./serviceWorker";

// import { StaticRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const rootReducer = combineReducers({
  userReducer: userReducer,
  boardsReducer: boardsReducer,
  workspaceReducer: workspaceReducer,
  checklistsReducer: checklistsReducer,
  labelsReducer: labelsReducer,
  archiveReducer: archiveReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

console.log(`%c INITIAL REDUX STORE`, "color: purple", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
