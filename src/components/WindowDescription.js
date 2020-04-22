import React, { useState } from "react";
import { connect } from "react-redux";

const WindowDescription = (props) => {
  return (
    <div className="task-window-desc">
      <div className="desc-header">
        <h3>Description</h3>
        <div className="editable-desc">edit</div>
      </div>
    </div>
  );
};
export default connect()(WindowDescription);
