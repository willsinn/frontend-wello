import React, { useState } from "react";

const TaskWindow = ({ editTask, handleCloseWindow }) => {
  return (
    <div className="window-modal">
      <div className="task-window">
        Hi Im task Window
        <div className="close-task-window" onClick={(e) => handleCloseWindow()}>
          ✕
        </div>
      </div>
    </div>
  );
};
export default TaskWindow;
