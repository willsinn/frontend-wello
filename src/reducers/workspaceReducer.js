const defaultState = {
  workspace: {
    items: {
      cards: {}
    }
  }
};

const workspaceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_CARD":
      console.log(state, action);
      return { ...state, cards: [...state.workspace.item.cards, action.card] };
    case "CLEAR_WORKSPACE":
      return { ...state, workspace: defaultState };
    case "SET_WORKSPACE":
      return { ...state, workspace: action.workspace.project };
    default:
      return state;
  }
};
export default workspaceReducer;
