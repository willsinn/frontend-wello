const defaultState = {
  workspace: {
    items: []
  },
  showingForm: false
};

const workspaceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "TOGGLE_CARD_FORM":
      return {
        ...state,
        showingForm: !state.showingForm
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
