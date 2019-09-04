import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteProjectWorkspace } from "../actions/projects";
import { clearWorkspace } from "../actions/workspace";

const WorkspaceMenuBtns = (props, { dispatch }) => {
  const [menu, setMenu] = useState(false);

  const handleDelete = e => {
    props.dispatch(deleteProjectWorkspace(props.workspace));
    props.dispatch(clearWorkspace());
  };
  return (
    <div className="pwc-title-bottom">
      <button onClick={() => setMenu(!menu)}>Workspace Actions</button>

      {menu ? (
        <div>
          <button className="pwc-btn">Update Workspace Name</button>
          <button onClick={e => handleDelete(e)} className="pwc-btn">
            Delete Workspace
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default connect()(WorkspaceMenuBtns);
