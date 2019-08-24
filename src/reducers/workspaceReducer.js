const defaultState = {
  workspace: {
    items: [{ item: { cards: {} } }]
  },
  newCard: {}
};

const workspaceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_ITEM_CARD":
      const newItems = state.workspace.items.map(item => {
        if (item.id === action.itemData.id) {
          return action.itemData;
        } else {
          return item;
        }
      });
      return {
        ...state,
        items: newItems
      };
    case "CLEAR_WORKSPACE":
      return { ...state, workspace: defaultState };
    case "SET_WORKSPACE":
      return { ...state, workspace: action.workspace.project };
    case "ADD_CARD":
      return { ...state, newCard: action.card };
    default:
      return state;
  }
};
export default workspaceReducer;
