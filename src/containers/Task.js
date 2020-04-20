import React, { useState } from "react";

const Task = ({ task, card, renderQuickEditor }) => {
  const [visible, setVisible] = useState(false);
  const [window, setWindow] = useState(false);
  return (
    <div
      className="task-item task-item-details"
      onClick={(e) => setWindow(true)}
      onMouseEnter={(e) => setVisible(true)}
      onMouseLeave={(e) => setVisible(false)}
    >
      {window ? <div className="task-window">Hi Im task Window</div> : null}
      <div className="task-item-note">
        <span>{task.note}</span>
        {visible ? (
          <span
            className="edit-task-item-btn"
            onClick={(e) => renderQuickEditor(e, task)}
          >
            ✎
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Task;
