import React from "react";
import ProjectWorkspaceList from "../components/ProjectWorkspaceList";

const WorkspaceItemsContainer = props => {
  return (
    <div id="workspace-items-container">
      <ProjectWorkspaceList workspace={props.workspace} />
    </div>
  );
};
export default WorkspaceItemsContainer;
