import React, { useState } from "react";

const Task = ({ task, handleRenderTaskWindow, handleRenderQuickEditor }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="task-item task-item-details"
      onMouseEnter={(e) => setVisible(true)}
      onMouseLeave={(e) => setVisible(false)}
    >
      <div className="task-item-note">
        Labels
        <div
          className="open-task-window"
          onClick={(e) => handleRenderTaskWindow(task)}
        >
          {task.note}
        </div>
        {visible ? (
          <span
            className="edit-task-item-btn"
            onClick={(e) => handleRenderQuickEditor(task)}
          >
            ✎
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Task;
