const defaultState = {
  workspace: {
    items: [{ item: { cards: [{ card: {} }] } }]
  }
};

const workspaceReducer = (state = defaultState, action) => {
  console.log(state.workspace.items);
  switch (action.type) {
    case "CLEAR_WORKSPACE":
      return { ...state, workspace: defaultState };
    case "SET_WORKSPACE":
      return { ...state, workspace: action.workspace.project };
    case "SET_ITEM_CARDS":
      console.log(action.itemData);
      const newItems = [...state.workspace.items].map(item => {
        if (item.id === action.itemData.id) {
          return action.itemData;
        } else {
          return item;
        }
      });
      console.log(newItems);
      return { ...state, items: [{ item: action.itemData }] };
    default:
      return state;
  }
};
export default workspaceReducer;
