import React from "react";
import { connect } from "react-redux";

const ProjectsList = props => {
  const renderProjects = () => {
    const userProjects = props.projects[0];

    return userProjects.map(project => {
      let projectTitle = project.title;
      let projectDescription = project.description;
      let nullProjectCounter = 1;
      if (projectTitle === null) {
        projectTitle = `Project ${nullProjectCounter}. Great strategy for keeping your memory sharp!`;
        nullProjectCounter += 1;
      }
      if (projectDescription === null) {
        projectDescription =
          "Nothings ever set in stone - be water my friend -";
      }
      return (
        <div className="list-item">
          <div className="project-list-title">{projectTitle}</div>
        </div>
      );
    });
  };
  return (
    <div className="project-list dropdown">
      <h1>{props.name}</h1>
      {props.projects.length === undefined ? null : <>{renderProjects()}</>}
    </div>
  );
};
const mapStateToProps = ({ projectsReducer: projects }) => ({
  projects: projects
});
export default connect(mapStateToProps)(ProjectsList);
