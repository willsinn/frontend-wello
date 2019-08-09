import React from "react";

const ProjectTile = props => {
  return (
    <div className="project tile">
      <div className="project-title">{props.project.title}</div>
    </div>
  );
};

export default ProjectTile;
