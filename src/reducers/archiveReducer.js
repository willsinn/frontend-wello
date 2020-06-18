const defaultState = {
  archives: [],
};
const archiveReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ARCHIVES":
      console.log(action.archives);
      debugger;
      return { ...state };
    // case "SET_CARDS_ARCHIVES":
    //   const archived = action.cards.filter((card) => card.archived === true);
    //   const collective = state.archives;
    //   if (archived.length > 0) {
    //     archived.map((card) => {
    //       const archiveId = `card__${card.id}`;
    //       const updatedCard = { ...card, id: archiveId };
    //       collective.push(updatedCard);
    //       return updatedCard;
    //     });
    //   }
    //   return { ...state, archives: collective };
    default:
      return state;
  }
};
export default archiveReducer;
