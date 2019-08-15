import React from "react";
import ProjectWorkspaceCard from "./ProjectWorkspaceCard";

const ProjectWorkspaceItem = props => {
  return (
    <li className="wsp-list-item">
      <div className="wsp-title">{props.item.objective}</div>
      <ProjectWorkspaceCard />
    </li>
  );
};
export default ProjectWorkspaceItem;
