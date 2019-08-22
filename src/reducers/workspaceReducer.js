const defaultState = {
  workspace: {
    items: [{ item: { cards: {} } }]
  }
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
      const cardItem = state.workspace.items.find(
        item => item.id === action.card.item_id
      );
      return {
        ...state,
        cards: [...cardItem.cards, action.card]
      };
    default:
      return state;
  }
};
export default workspaceReducer;
