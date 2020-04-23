import React, { useState } from "react";
import { connect } from "react-redux";

const TaskWindowDescription = ({ taskDesc }) => {
  console.log(taskDesc);
  return (
    <div className="task-window-desc">
      <div className="module-header">
        <h3 className="module-title">Description</h3>
        <div className="editable-desc">
          <button className="edit-desc-btn">Edit</button>
        </div>
      </div>
      <div className="module-body">
        <div className="desc-placeholder">
          <p>Add a more detailed description...</p>
        </div>
      </div>
    </div>
  );
};
export default connect()(TaskWindowDescription);
