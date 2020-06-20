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
      // const userId = action.boardsData.user_id;
      // let bds = action.boardsData.boards;
      const userBoards = action.boardsData.boards.filter(
        (board) => action.boardsData.user_id
      );
      // debugger;

      return { ...state, boards: userBoards };
    case "ADD_NEW_BOARD":
      return { ...state, boards: [...state.boards, action.board] };
    case "UPDATE_BOARD":
      const updatedBoard = action.board;
      const updatedBoards = state.boards.map((board) => {
        if (board.id === updatedBoard.id) {
          return updatedBoard;
        } else {
          return board;
        }
      });
      return { ...state, boards: updatedBoards };

    default:
      return state;
  }
};
export default boardsReducer;
