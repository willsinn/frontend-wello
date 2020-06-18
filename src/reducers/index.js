import { combineReducers } from "redux";
import userReducer from "./userReducer";
import boardsReducer from "./boardsReducer";
import workspaceReducer from "./workspaceReducer";
import checklistsReducer from "./checklistsReducer";
import labelsReducer from "./labelsReducer";
import archiveReducer from "./archiveReducer";

export default combineReducers({
  userReducer,
  boardsReducer,
  workspaceReducer,
  checklistsReducer,
  labelsReducer,
  archiveReducer,
});
