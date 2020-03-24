const defaultState = {
  task: {}
};
const taskReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_TASK":
      return {
        ...state,
        task: action.payload,
        cardId: action.payload.id
      };

    default:
      return state;
  }
};

export default taskReducer;
