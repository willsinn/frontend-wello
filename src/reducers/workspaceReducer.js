const defaultState = {
  workspace: {
    items: [{ item: { cards: { card: {} } } }]
  }
};

const workspaceReducer = (state = defaultState, action) => {
  console.log(state.workspace.items);
  switch (action.type) {
    case "CLEAR_WORKSPACE":
      return { ...state, workspace: defaultState };
    case "SET_WORKSPACE":
      return { ...state, workspace: action.workspace.project };
    case "ADD_ITEM_CARD":
      const targetItem = state.workspace.items.filter(
        item => item.id === action.card.item_id
      );
      const newItemCards = [...targetItem[0].cards, action.card];
      return {
        ...state,
        cards: newItemCards[0]
      };
    default:
      return state;
  }
};
export default workspaceReducer;
