import React from "react";

import { connect } from "react-redux";

const TaskWindowChecklists = ({ task, dispatch }) => {
  return (
    <div className="task-window-desc">
      <div className="module-header">
        <h3 className="module-title">Checklist</h3>
      </div>
    </div>
  );
};

export default TaskWindowChecklists;
