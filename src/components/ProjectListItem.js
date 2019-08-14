import React from "react";

const ProjectListItem = props => {
  const handleClick = e => {
    console.log(e.target, props.project);
  };
  return (
    <div onClick={e => handleClick(e)} className="project-list-item">
      {props.project.title}
    </div>
  );
};

export default ProjectListItem;
