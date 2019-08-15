import React from "react";
import ProjectWorkspaceItem from "./ProjectWorkspaceItem";
import AddWorkspaceItemForm from "../containers/AddWorkspaceItemForm";

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
      <ul className="workspace-list">
        {renderCards()}
        <li className="wsp-list-item">
          <div className="wsp-title">
            <AddWorkspaceItemForm workspace={props.workspace} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProjectWorkspaceList;
