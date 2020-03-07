const defaultState = {
  isEditActive: false,
  workspace: {},
  items: []
};

const workspaceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "TOGGLE_EDIT":
      return { ...state, isEditActive: !state.isEditActive };
    case "CLEAR_WORKSPACE":
      return { ...state, workspace: defaultState, items: [] };
    case "SET_WORKSPACE":
      return { ...state, workspace: action.workspace.board };
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
      let newItems;
      if (state.workspace.id === action.item.board_id) {
        newItems = state.items.map(item => {
          if (item.id === action.item.id) {
            return action.item;
          }
          return item;
        });
      } else {
        newItems = state.items;
      }
      return {
        ...state,
        items: newItems
      };
    case "DELETE_ITEM":
      const itemsLeft = state.items.filter(item => item.id !== action.item.id);
      return {
        ...state,
        items: itemsLeft
      };
    default:
      return state;
  }
};
export default workspaceReducer;
