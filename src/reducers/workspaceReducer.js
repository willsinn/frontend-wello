const defaultState = {
  workspace: {}
};

const workspaceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_WORKSPACE":
      return { ...state, workspace: action.workspace.project };
    default:
      return state;
  }
};
export default workspaceReducer;
