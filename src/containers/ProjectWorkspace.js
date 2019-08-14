import React from "react";

const ProjectWorkspace = props => {
  return (
    <div id="workspace">
      <div className="project-workspace-control">
        <div className="pwc-left">
          <div className="pwc-title-top">
            <h3 className="pwc-title">{props.workspace.title}</h3>
          </div>
          <div className="pwc-bottom">
            <button className="pwc-btn">EDIT</button>
            <button className="pwc-btn">DELETE</button>
          </div>
        </div>
        <div className="pwc-right">
          <h3>
            About this board <button className="pwc-btn"> + </button>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default ProjectWorkspace;
