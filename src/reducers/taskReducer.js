const defaultState = {
  task: {}
};
const taskReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_TASK":
      return {
        ...state,
        task: action.payload
      };
    default:
      return state;
  }
};

export default taskReducer;
