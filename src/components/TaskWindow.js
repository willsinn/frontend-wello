import React, { useState } from "react";

const TaskWindow = ({ editTask, handleCloseWindow }) => {
  return (
    <div className="window-modal">
      <div className="task-window">
        <div className="close-task-window" onClick={(e) => handleCloseWindow()}>
          ✕
        </div>
        <div className="task-detail-window">
          <div className="task-window-header">{editTask.note}</div>
        </div>
      </div>
    </div>
  );
};
export default TaskWindow;
