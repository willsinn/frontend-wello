import { combineReducers } from "redux";
import userReducer from "./userReducer";
import boardsReducer from "./boardsReducer";
import workspaceReducer from "./workspaceReducer";

export default combineReducers({
  userReducer,
  boardsReducer,
  workspaceReducer
});
