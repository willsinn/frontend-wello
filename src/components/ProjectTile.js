import React from "react";

const ProjectTile = props => {
  console.log(props.project);
  return (
    <div className="project tile">
      <div className="project-title">{props.project.title}</div>
    </div>
  );
};

export default ProjectTile;
