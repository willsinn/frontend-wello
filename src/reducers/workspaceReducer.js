const defaultState = {
  workspace: {
    items: []
  }
};

const workspaceReducer = (state = defaultState, action) => {
  console.log(state);
  switch (action.type) {
    case "TOGGLE_LIST":
      return {
        ...state,
        listOpen: !state.listOpen
      };
    case "ADD_WORKSPACE_ITEM":
      console.log(state.workspace.items, action);
      debugger;
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
