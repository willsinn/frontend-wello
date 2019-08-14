import React from "react";
import WorkspaceList from "../components/WorkspaceList";
import AddWorkspaceItemForm from "./AddWorkspaceItemForm";

const WorkspaceItemsContainer = props => {
  return (
    <div id="workspace-items">
      <WorkspaceList />
      <AddWorkspaceItemForm />
    </div>
  );
};
export default WorkspaceItemsContainer;
