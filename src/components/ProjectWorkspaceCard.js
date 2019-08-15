import React from "react";

const ProjectWorkspaceCard = props => {
  console.log(props);
  return <li className="workspace-item"> {props.item.objective} Item </li>;
};
export default ProjectWorkspaceCard;
