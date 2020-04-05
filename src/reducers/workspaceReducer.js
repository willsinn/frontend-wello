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
      console.log(state.workspace);
      return {
        ...state,
        workspace: {
          id: state.workspace.id,
          user_id: state.workspace.user_id,
          title: state.workspace.title,
          board_desc: state.workspace.board_desc,
          background: state.workspace.background,
          team_name: state.workspace.team_name,
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
      const updateCardTasks = state.workspace.cards.map(card => {
        if (card.id === action.task.card_id) {
          const updatedCard = {
            id: card.id,
            goal: card.goal,
            card_desc: card.card_desc,
            board_id: card.board_id,
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
          id: state.workspace.id,
          user_id: state.workspace.user_id,
          title: state.workspace.title,
          board_desc: state.workspace.board_desc,
          background: state.workspace.background,
          team_name: state.workspace.team_name,
          cards: updateCardTasks
        }
      };

    default:
      return state;
  }
};
export default workspaceReducer;
