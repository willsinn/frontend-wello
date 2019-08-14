const defaultState = {
  workspace: {}
};

const workspaceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "TOGGLE_LIST":
      return {
        ...state,
        listOpen: !state.listOpen
      };
    case "ADD_WORKSPACE_ITEM":
      return {
        ...state,
        items: [...state.workspace.items, action.item]
      };
    case "CLEAR_WORKSPACE":
      return { ...state, workspace: defaultState };
    case "SET_WORKSPACE":
      return { ...state, workspace: action.workspace.project };
    default:
      return state;
  }
};
export default workspaceReducer;
