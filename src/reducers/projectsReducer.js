const defaultState = {
  projects: []
};

const projectsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      return { ...state, projects: action.payload };
    case "ADD_NEW_PROJECT":
      return { ...state, projects: action.project };
    default:
      return state;
  }
};
export default projectsReducer;
