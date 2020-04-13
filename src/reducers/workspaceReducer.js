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
    case "UPDATE_ARCHIVED_TASK":
      const updateArchivedTask = state.workspace.cards.map(card => {
        if (card.id === action.card.id) {
          const updateTasks = card.tasks.map(task => {
            if (task.id === action.task.id) {
              return action.task;
            } else {
              return task;
            }
          });
          return updateTasks;
        } else {
          return card;
        }
      });
      return {
        ...state,
        workspace: { ...state.workspace, cards: updateArchivedTask }
      };
    default:
      return state;
  }
};
export default workspaceReducer;
