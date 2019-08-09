import React from "react";
import ProjectTile from "../components/ProjectTile";
import { connect } from "react-redux";

const ProjectTilesContainer = props => {
  const renderTiles = () => {
    if (props.projects.length > 0) {
      return [...props.projects].map(project => (
        <ProjectTile key={project.id} project={project} />
      ));
    }
  };
  return (
    <div className="projects middle-tiles container">
      <div className="project-tiles container">{renderTiles()}</div>
    </div>
  );
};

const mapStateToProps = ({ projectsReducer: projects }) => ({
  projects: projects.projects
});
export default connect(mapStateToProps)(ProjectTilesContainer);
