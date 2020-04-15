const defaultState = {
  workspace: {}
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
    case "UPDATE_ARCHIVED_CARD":
      const updateArchivedCard = state.workspace.cards.map(card => {
        if (card.id === action.card.id) {
          return action.card;
        } else {
          return card;
        }
      });
      return {
        ...state,
        workspace: { ...state.workspace, cards: updateArchivedCard }
      };
    case "ADD_TASK":
      const addNewTask = state.workspace.cards.map(card => {
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
          cards: addNewTask
        }
      };
    case "UPDATE_ARCHIVED_TASK":
      const updateArchivedCardTask = state.workspace.cards.map(card => {
        if (card.id === action.task.card_id) {
          const updatedTasks = card.tasks.map(task => {
            if (task.id === action.task.id) {
              return action.task;
            } else {
              return task;
            }
          });
          const updatedCard = {
            ...card,
            tasks: updatedTasks
          };
          return updatedCard;
        } else {
          return card;
        }
      });
      return {
        ...state,
        workspace: { ...state.workspace, cards: updateArchivedCardTask }
      };
    default:
      return state;
  }
};
export default workspaceReducer;
