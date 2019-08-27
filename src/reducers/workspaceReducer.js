const defaultState = {
  isEditActive: false,
  workspace: {
    items: [{ item: { cards: {} } }]
  },
  updatedItem: {},
  editedCard: {}
};

const workspaceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "EDITED_TEXT":
      return { ...state, editedCard: action.text };
    case "ADD_ITEM_CARD":
      return {
        ...state,
        updatedItem: action.itemData
      };
    case "TOGGLE_EDIT":
      return { ...state, isEditActive: !state.isEditActive };
    case "CLEAR_WORKSPACE":
      return { ...state, workspace: defaultState };
    case "SET_WORKSPACE":
      return { ...state, workspace: action.workspace.project };

    default:
      return state;
  }
};
export default workspaceReducer;
