import React, { useState } from "react";
import { connect } from "react-redux";

const TaskWindowDescription = (props) => {
  return (
    <div className="task-window-desc">
      <div className="desc-header">
        <h3>Description</h3>
        <div className="editable-desc">
          <button className="edit-desc-btn">Edit</button>
        </div>
      </div>
    </div>
  );
};
export default connect()(TaskWindowDescription);
