import React from "react";

const LeftSidebarProjectsListItem = props => {
  return (
    <li className="list-item">
      <div className="project-list-title">{props.project.title}</div>
    </li>
  );
};
export default LeftSidebarProjectsListItem;
