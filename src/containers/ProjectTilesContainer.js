import React from "react";
import ProjectTile from "../components/ProjectTile";

const ProjectTilesContainer = props => {
  return (
    <div className="projects middle-tiles container">
      <div className="project-tiles container">
        <ProjectTile />
      </div>
    </div>
  );
};
export default ProjectTilesContainer;
