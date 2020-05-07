const defaultState = {
  labels: [],
};

const labelsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LABELS":
      return { ...state, labels: action.labels };
    default:
      return state;
  }
};
export default labelsReducer;
