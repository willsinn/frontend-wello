import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import boardsReducer from "./boardsReducer";
import workspaceReducer from "./workspaceReducer";
import checklistsReducer from "./checklistsReducer";
import labelsReducer from "./labelsReducer";

export default combineReducers({
  usersReducer,
  boardsReducer,
  workspaceReducer,
  checklistsReducer,
  labelsReducer,
});
