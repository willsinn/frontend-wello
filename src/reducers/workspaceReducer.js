const defaultState = {
  isEditActive: false,
  workspace: {},
  items: [],
  updatedItem: {},
  newCard: {},
  editedCard: {}
};

const workspaceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "EDITED_TEXT":
      return { ...state, editedCard: action.text };

    case "SET_ITEMS":
      return {
        ...state,
        items: action.items
      };
    case "ADD_ITEM":
      console.log(action);
      return {
        ...state,
        items: [...state.items, action.item]
      };
    case "UPDATE_ITEM":
      const newItems = state.items.map(item => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
      return {
        ...state,
        items: newItems
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
