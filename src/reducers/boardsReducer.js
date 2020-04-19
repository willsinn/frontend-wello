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
    "meadow"
  ]
};

const boardsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "DELETE_BOARD":
      const remainingBoards = [...state.boards].filter(
        board => board.id !== action.board.id
      );
      return {
        ...state,
        boards: remainingBoards
      };
    case "SET_BOARDS":
      return { ...state, boards: action.payload };
    case "ADD_NEW_BOARD":
      return { ...state, boards: [...state.boards, action.board] };
    case "UPDATE_BOARD":
      console.log(action.board);
      debugger;
      return { state };
    default:
      return state;
  }
};
export default boardsReducer;
