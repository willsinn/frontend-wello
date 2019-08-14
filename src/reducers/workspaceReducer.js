const defaultState = {
  workspace: {}
};

const workspaceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_WORKSPACE":
      return { ...state, projectWorkspace: action.payload };
    default:
      return state;
  }
};
export default workspaceReducer;
