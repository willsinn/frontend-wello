const defaultState = {
  archives: [],
};
const archiveReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ARCHIVES":
      const u_boards = action.data.userBoards.filter(
        (b) => b.archived === true
      );
      let cds = action.data.userBoards.map((b) => {
        let bc = b.cards;
        return bc;
      });
      cds = cds.flat();
      const b_cards = cds.filter((cd) => cd.archived === true);
      let tks = cds.map((c) => {
        let ct = c.tasks;

        return ct;
      });
      tks = tks.flat();
      const c_tasks = tks.filter((t) => t.archived === true);
      const userArchives = b_cards.concat(u_boards).concat(c_tasks[0]);

      return {
        ...state,
        archives: userArchives,
      };
    case "REMOVE_ARCHIVE":
      let remainingArchives;
      if (action.data.user_id) {
        debugger;
        const removeArchive = state.archives.filter(
          (archive) => action.data.id !== archive.id
        );
        remainingArchives = removeArchive;
        return remainingArchives;
      }
      if (action.data.board_id) {
        const removeArchive = state.archives.filter(
          (archive) => action.data.id !== archive.id
        );
        remainingArchives = removeArchive;
        return remainingArchives;
      }
      if (action.data.card_id) {
        const removeArchive = state.archives.filter(
          (archive) => action.data.id !== archive.id
        );
        remainingArchives = removeArchive;
        return remainingArchives;
      }

      return {
        ...state,
        archives: remainingArchives,
      };
    default:
      return state;
  }
};
export default archiveReducer;
