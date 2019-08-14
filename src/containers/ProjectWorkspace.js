import React from "react";
import WorkspaceItemsContainer from "./WorkspaceItemsContainer";
import { connect } from "react-redux";
import { deleteProjectWorkspace } from "../actions/projects";
import { clearWorkspace } from "../actions/workspace";

const ProjectWorkspace = (props, { dispatch }) => {
  const handleDelete = e => {
    props.dispatch(deleteProjectWorkspace(props.workspace));
    props.dispatch(clearWorkspace());
  };

  return (
    <div id="workspace">
      <div className="project-workspace-control">
        <div className="pwc-left">
          <div className="pwc-title-top">{props.workspace.title}</div>
          <div className="pwc-title-bottom">
            <button className="pwc-btn">EDIT</button>
            <button onClick={e => handleDelete(e)} className="pwc-btn">
              DELETE
            </button>
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

export default connect()(ProjectWorkspace);
