const defaultState = {
  workspace: {},
  cards: [],
  isAddingId: null,
  addValue: "",
};

const workspaceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "TOGGLE_EDIT":
      return { ...state, isEditActive: !state.isEditActive };
    case "CLEAR_WORKSPACE":
      return {
        ...state,
        workspace: {},
      };
    case "SET_WORKSPACE":
      return {
        ...state,
        workspace: action.workspace.board,
        cards: [...action.workspace.board.cards],
      };
    case "UPDATE_WORKSPACE":
      return { ...state, workspace: action.board };
    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, action.card],
      };
    case "UPDATE_CARD":
      const updatedCards = state.cards.map((card) => {
        if (card.id === action.card.id) {
          return action.card;
        } else {
          return card;
        }
      });
      return {
        ...state,
        cards: updatedCards,
      };
    case "ADD_TASK":
      const addNewTask = state.cards.map((card) => {
        if (card.id === action.task.card_id) {
          const updatedCards = {
            ...card,
            tasks: [...card.tasks, action.task],
          };
          return updatedCards;
        } else {
          return card;
        }
      });
      return {
        ...state,
        cards: addNewTask,
      };
    case "UPDATE_TASK":
      const updateArchivedCardTask = state.cards.map((card) => {
        if (card.id === action.task.card_id) {
          const updatedTasks = card.tasks.map((task) => {
            if (task.id === action.task.id) {
              return action.task;
            } else {
              return task;
            }
          });
          const updatedCard = {
            ...card,
            tasks: updatedTasks,
          };
          return updatedCard;
        } else {
          return card;
        }
      });
      return {
        ...state,
        cards: updateArchivedCardTask,
      };
    case "SET_CURRENT_ADDING":
      return { ...state, isAddingId: action.cardId };
    case "SAVE_ADD_VALUE":
      return { ...state, addValue: action.value };
    case "CLOSE_ADDING":
      return { ...state, isAddingId: null, addValue: "" };
    default:
      return state;
  }
};
export default workspaceReducer;
