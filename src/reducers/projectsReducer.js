const defaultState = {
  projects: []
};

const projectsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "DELETE_PROJECT":
      const remainingProjects = [...state.projects].filter(
        project => project.id !== action.project.id
      );
      return {
        ...state,
        projects: remainingProjects
      };
    case "SET_PROJECTS":
      return { ...state, projects: action.payload };
    case "ADD_NEW_PROJECT":
      return { ...state, projects: [...state.projects, action.project] };
    default:
      return state;
  }
};
export default projectsReducer;
