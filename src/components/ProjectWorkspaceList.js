import React from "react";
import ProjectWorkspaceItem from "./ProjectWorkspaceItem";
import AddWorkspaceCardForm from "../containers/AddWorkspaceCardForm";

const ProjectWorkspaceList = props => {
  console.log(props.workspace.items);
  const renderCards = () => {
    if (props.workspace.items.length > 0) {
      return [...props.workspace.items].map(item => (
        <ProjectWorkspaceItem item={item} />
      ));
    }
  };
  return (
    <div className="workspace-list-wrapper">
      <ul className="workspace-list">{renderCards()}</ul>
      <AddWorkspaceCardForm workspace={props.workspace} />
    </div>
  );
};

export default ProjectWorkspaceList;
