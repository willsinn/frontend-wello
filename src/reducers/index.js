import { combineReducers } from "redux";
import userReducer from "./userReducer";
import projectsReducer from "./projectsReducer";
export default combineReducers({
  userReducer,
  projectsReducer
});
