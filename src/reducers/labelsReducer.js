const defaultState = {
  labels: [],
  taskLabels: [],
};

const labelsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LABELS":
      return { ...state, labels: action.labels };
    case "ADD_NEW_LABEL":
      return { ...state, labels: [...state.labels, action.label] };
    case "SET_TASK_LABELS":
      return { ...state, taskLabels: action.task_labels };
    case "UPDATE_LABEL":
      const updatedLabel = action.label;
      const updatedLabels = state.labels.map((label) => {
        if (label.id === updatedLabel.id) {
          return updatedLabel;
        } else {
          return label;
        }
      });
      return { ...state, labels: updatedLabels };
    case "ADD_TASK_LABEL":
      return {
        ...state,
        taskLabels: [...state.taskLabels, action.taskLabel],
      };
    case "REMOVE_TASK_LABEL":
      const updatedTaskLabels = state.taskLabels.filter(
        (taskLabel) => taskLabel.id !== action.taskLabelId
      );
      return {
        ...state,
        taskLabels: updatedTaskLabels,
      };
    default:
      return state;
  }
};
export default labelsReducer;
