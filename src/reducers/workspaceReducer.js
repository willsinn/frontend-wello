const defaultState = {
  isEditActive: false,
  workspace: {},
  cards: []
};

const workspaceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "TOGGLE_EDIT":
      return { ...state, isEditActive: !state.isEditActive };
    case "CLEAR_WORKSPACE":
      return { ...state, workspace: defaultState, cards: [] };
    case "SET_WORKSPACE":
      return { ...state, workspace: action.workspace.board };
    case "ADD_CARD":
      const newCards = [...state.cards, action.card];
      console.log(newCards, state.cards);

      return {
        ...state,
        cards: [newCards]
      };
    case "UPDATE_CARD":
      let newItems;
      if (state.workspace.id === action.card.board_id) {
        newItems = state.cards.map(card => {
          if (card.id === action.card.id) {
            return action.card;
          }
          return card;
        });
      } else {
        newItems = state.cards;
      }
      return {
        ...state,
        cards: newItems
      };
    case "DELETE_CARD":
      const cardsLeft = state.cards.filter(card => card.id !== action.card.id);
      return {
        ...state,
        cards: cardsLeft
      };
    default:
      return state;
  }
};
export default workspaceReducer;
