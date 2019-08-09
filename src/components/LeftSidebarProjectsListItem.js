import React from "react";

const LeftSidebarProjectsListItem = props => {
  return (
    <div className="list-item">
      <div className="project-list-title">{props.project.title}</div>
    </div>
  );
};
export default LeftSidebarProjectsListItem;
