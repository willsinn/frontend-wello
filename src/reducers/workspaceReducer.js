const defaultState = {
  workspace: {
    items: [{ item: { cards: {} } }]
  },
  newCard: {},
  updatedItem: {},
  editingCard: {}
};

const workspaceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return { ...state, newCard: action.card };
    case "ADD_ITEM_CARD":
      return {
        ...state,
        updatedItem: action.itemData
      };
    case "CLEAR_EDIT_CARD":
      return { ...state, editingCard: {} };
    case "SET_EDIT_CARD":
      return { ...state, editingCard: action.edit };
    case "CLEAR_WORKSPACE":
      return { ...state, workspace: defaultState };
    case "SET_WORKSPACE":
      return { ...state, workspace: action.workspace.project };

    default:
      return state;
  }
};
export default workspaceReducer;
