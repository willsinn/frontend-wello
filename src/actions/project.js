export const setProjects = projectsData => ({
  type: "SET_PROJECTS",
  projects: projectsData
});

export const addNewProject = project => ({
  type: "ADD_NEW_PROJECT",
  id: project.id,
  user_id: project.user_id,
  title: project.title,
  description: project.description
});
