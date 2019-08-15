import React from "react";
import ProjectWorkspaceList from "../components/ProjectWorkspaceList";
import AddWorkspaceCardForm from "./AddWorkspaceCardForm";

const WorkspaceItemsContainer = props => {
  return (
    <div id="workspace-items">
      <ProjectWorkspaceList />
      <AddWorkspaceCardForm workspace={props.workspace} />
    </div>
  );
};
export default WorkspaceItemsContainer;
