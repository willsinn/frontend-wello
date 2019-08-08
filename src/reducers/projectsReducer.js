import { setProjects, addNewProject } from "../actions/project";

const defaultState = {
  projects: []
};

const projectsReducer = (state = defaultState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "SET_PROJECTS":
      return [...state.projects, action.projects.projectsData];
    case "ADD_NEW_PROJECT":
      return [...state.projects, action.project];
    default:
      return state;
  }
  console.log();
};
export default projectsReducer;
