const defaultState = {
  archives: [],
};
const archiveReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ARCHIVES":
      const activeArchives = [];
      action.data.userBoards.forEach((board) => {
        if (board.cards) {
          board.cards.forEach((card) => {
            if (card.tasks) {
              card.tasks.forEach((task) => {
                if (task.archived) {
                  activeArchives.push(task);
                }
              });
            }
            if (card.archived) {
              activeArchives.push(card);
            }
          });
        }
        if (board.archived) {
          activeArchives.push(board);
        }
      });
      return {
        ...state,
        archives: activeArchives,
      };
    case "REMOVE_ARCHIVE":
      let remainingArchives = [];

      if (action.data.user_id) {
        const removeArchive = state.archives.filter(
          (archive) => action.data.id !== archive.id
        );
        remainingArchives = removeArchive;
      }
      if (action.data.board_id) {
        const removeArchive = state.archives.filter(
          (archive) => action.data.id !== archive.id
        );
        remainingArchives = removeArchive;
      }
      if (action.data.card_id) {
        const removeArchive = state.archives.filter(
          (archive) => action.data.id !== archive.id
        );
        remainingArchives = removeArchive;
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
