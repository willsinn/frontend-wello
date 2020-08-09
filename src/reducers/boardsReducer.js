const defaultState = {
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
  boards: [],
  personalOpen: true,
  starredOpen: true,
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
      const userBoards = action.boardsData.boards.filter(
        (board) => board.user_id === action.boardsData.user_id
      );

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
    case "TOGGLE_SIDELIST_STARRED":
      return { ...state, starredOpen: !state.starredOpen };
    case "TOGGLE_SIDELIST_PERSONAL":
      return { ...state, personalOpen: !state.personalOpen };
    default:
      return state;
  }
};
export default boardsReducer;
