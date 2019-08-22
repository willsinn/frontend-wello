const defaultState = {
  workspace: {
    items: [{ item: { cards: [{ card: {} }] } }]
  }
};

const workspaceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CLEAR_WORKSPACE":
      return { ...state, workspace: defaultState };
    case "SET_WORKSPACE":
      return { ...state, workspace: action.workspace.project };
    case "SET_ITEM_CARDS":
      const newItems = [...state.workspace.items].map(item => {
        if (item.id === action.itemData.id) {
          return action.itemData;
        } else {
          return item;
        }
      });
      return { ...state, items: newItems };
    default:
      return state;
  }
};
export default workspaceReducer;
