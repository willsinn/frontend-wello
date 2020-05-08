const defaultState = {
  labels: [],
};

const labelsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LABELS":
      return { ...state, labels: action.labels };
    case "UPDATE_LABEL":
      console.log(action.label);

      debugger;
      return { ...state };
    default:
      return state;
  }
};
export default labelsReducer;
