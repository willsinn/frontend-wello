const defaultState = {
  archives: {
    boards: [],
    cards: [],
    tasks: [],
  },
};
const archiveReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ARCHIVES":
      const u_boards = action.data.userBoards.filter(
        (b) => b.archived === true
      );
      let cds = action.data.userBoards.map((b) => {
        return b.cards;
      });
      cds = cds.flat();
      const b_cards = cds.filter((card) => card.archived === true);
      let tks = cds.map((card) => {
        return card.tasks;
      });
      tks = tks.flat();
      const c_tasks = tks.filter((task) => task.archived === true);

      return {
        ...state,
        archives: {
          boards: u_boards,
          cards: b_cards,
          tasks: c_tasks,
        },
      };
    // case "SET_BOARD_ARCHIVES":
    //   return {
    //     ...state,
    //     board_archives: [...state.board_archives, action.data]userBoards.,
    //   };
    // case "SET_CARD_ARCHIVES":
    //   return {
    //     ...state,
    //     card_archives: [...state.card_archives, action.data],
    //   };
    // case "SET_TASK_ARCHIVES":
    //   return {
    //     ...state,
    //     task_archives: [...state.task_archives, action.data],
    //   };
    default:
      return state;
  }
};
export default archiveReducer;
