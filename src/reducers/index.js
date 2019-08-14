import { combineReducers } from "redux";
import userReducer from "./userReducer";
import projectsReducer from "./projectsReducer";
import workspaceReducer from "./workspaceReducer";

export default combineReducers({
  userReducer,
  projectsReducer,
  workspaceReducer
});
