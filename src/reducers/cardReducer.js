const defaultState = {
  card: {},
  tasks: []
};
const cardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_CARD":
      return {
        ...state,
        card: action.payload,
        cardId: action.payload.id
      };
    case "SET_PAGE":
      return { ...state, activePg: action.page };
    default:
      return state;
  }
};

export default cardReducer;
