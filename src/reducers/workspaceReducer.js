const defaultState = {
  isEditActive: false,
  workspace: {},
  cards: [],
  tasks: []
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
      return {
        ...state,
        workspace: {
          ...state.workspace,
          cards: [...state.workspace.cards, action.card]
        }
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

    case "ADD_TASK":
      const updateTasks = state.workspace.cards.map(card => {
        if (card.id === action.task.card_id) {
          const updatedCard = {
            ...card,
            tasks: [...card.tasks, action.task]
          };
          return updatedCard;
        } else {
          return card;
        }
      });
      return {
        ...state,
        workspace: {
          ...state.workspace,
          cards: updateTasks
        }
      };

    default:
      return state;
  }
};
export default workspaceReducer;
