import { addNewProject } from "../actions/project";
const defaultState = {
  projects: [],
  project: {}
};

const projectsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_WORKSPACE":
      return { ...state, project: action.payload };
    case "SET_PROJECTS":
      return { ...state, projects: action.payload };
    case "ADD_NEW_PROJECT":
      return { ...state, projects: [...state.projects, action.project] };
    default:
      return state;
  }
};
export default projectsReducer;
