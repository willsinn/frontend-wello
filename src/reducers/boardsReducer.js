const defaultState = {
  boards: []
};

const boardsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "DELETE_PROJECT":
      const remainingBoards = [...state.boards].filter(
        board => board.id !== action.board.id
      );
      return {
        ...state,
        boards: remainingBoards
      };
    case "SET_PROJECTS":
      return { ...state, boards: action.payload };
    case "ADD_NEW_PROJECT":
      return { ...state, boards: [...state.boards, action.board] };
    default:
      return state;
  }
};
export default boardsReducer;
