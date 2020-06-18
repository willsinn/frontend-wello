const defaultState = {
  boards: [],
  bgs: [
    "iceland",
    "lake",
    "mountians",
    "cityscape",
    "beach",
    "autumn",
    "waterfall",
    "city",
    "meadow",
  ],
};

const boardsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "DELETE_BOARD":
      const remainingBoards = [...state.boards].filter(
        (board) => board.id !== action.board.id
      );
      return {
        ...state,
        boards: remainingBoards,
      };
    case "SET_BOARDS":
      const userBoards = [];
      action.boardsData.boards.forEach((board) => {
        if (board.user_id === action.boardsData.user_id) {
          userBoards.push(board);
        }
      });
      return { ...state, boards: userBoards };
    case "ADD_NEW_BOARD":
      return { ...state, boards: [...state.boards, action.board] };
    case "UPDATE_BOARD":
      console.log(action.board);
      const updatedBoards = state.boards.map((board) => {
        if (board.id === action.board.id) {
          return action.board;
        } else {
          return board;
        }
      });
      debugger;
      return { ...state, boards: updatedBoards };
    default:
      return state;
  }
};
export default boardsReducer;
