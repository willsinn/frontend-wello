import React from "react";
import { connect } from "react-redux";

const ProjectTiles = props => {
  const renderProjects = () => {
    const userProjects = props.projects[0];

    return userProjects.map(project => {
      let projectTitle = project.title;
      let nullProjectCounter = 1;
      if (projectTitle === null) {
        projectTitle = `Project ${nullProjectCounter}`;
        nullProjectCounter += 1;
      }
      return (
        <div className="project tile">
          <div className="project-title">{projectTitle}</div>
        </div>
      );
    });
  };
  return (
    <div className="project-tiles container">
      {props.projects.length === undefined ? null : <>{renderProjects()}</>}
    </div>
  );
};
const mapStateToProps = ({ projectsReducer: projects }) => ({
  projects: projects
});
export default connect(mapStateToProps)(ProjectTiles);
