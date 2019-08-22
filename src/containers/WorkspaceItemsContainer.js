import React, { useEffect } from "react";
import ProjectWorkspaceList from "../components/ProjectWorkspaceList";
import { connect } from "react-redux";
import { fetchItem } from "../actions/workspace";

const WorkspaceItemsContainer = (props, { dispatch }) => {
  useEffect(() => {
    function handleFetchItemCards() {
      props.workspace.items.forEach(item => props.dispatch(fetchItem(item)));
    }
  }, []);
  console.log(props.workspace.items);
  return (
    <div id="workspace-items-container">
      <ProjectWorkspaceList workspace={props.workspace} />
    </div>
  );
};
export default connect()(WorkspaceItemsContainer);
