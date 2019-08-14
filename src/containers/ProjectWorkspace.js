import React from "react";
import WorkspaceItemsContainer from "./WorkspaceItemsContainer";

const ProjectWorkspace = props => {
  return (
    <div id="workspace">
      <div className="project-workspace-control">
        <div className="pwc-left">
          <div className="pwc-title-top">{props.workspace.title}</div>
          <div className="pwc-title-bottom">
            <button className="pwc-btn">EDIT</button>
            <button className="pwc-btn">DELETE</button>
          </div>
        </div>
        <div className="pwc-right">
          <div className="pwc-desc">
            About this board <button className="pwc-btn"> + </button>
          </div>
        </div>
      </div>
      <WorkspaceItemsContainer workspace={props.workspace} />
    </div>
  );
};
export default ProjectWorkspace;
