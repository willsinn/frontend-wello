const defaultState = {
  archives: [],
};
const archiveReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ARCHIVES":
      // console.log(action.archives);
      let archivedObjs = [];
      action.boards.map((board) => {
        const crds = board.cards;
        if (board.archived === true) {
          archivedObjs.push({
            arch_id: `board__${board.id}`,
            title: board.title,
            num_cards: `${board.cards.length}`,
          });
        }

        if (crds === undefined) {
          return board;
        }
        if (crds.length > 0) {
          crds.map((card) => {
            const tsks = card.tasks;
            if (card.archived === true) {
              archivedObjs.push({
                arch_id: `card__${card.id}`,
                title: card.goal,
                num_tasks: card.tasks.length,
              });
            } else {
              if (tsks === undefined) {
                return card;
              }
              if (tsks.length > 0) {
                console.log(tsks);
              }
            }
          });
        }
      });
      debugger;
      return { ...state };
    default:
      return state;
  }
};
export default archiveReducer;
