const defaultState = {
  labels: [],
  taskLabels: [],
};

const labelsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LABELS":
      return { ...state, labels: action.labels };
    case "SET_TASK_LABELS":
      return { ...state, taskLabels: action.task_labels };
    case "UPDATE_LABEL":
      const updatedLabels = state.labels.map((label) => {
        if (label.id === action.label.id) {
          return action.label;
        } else {
          return label;
        }
      });
      return { ...state, labels: updatedLabels };
    default:
      return state;
  }
};
export default labelsReducer;
