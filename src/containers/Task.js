import React, { useState } from "react";

const Task = ({ task, card, renderQuickEditor }) => {
  const [visible, setVisible] = useState(false);
  const [window, setWindow] = useState(false);
  const handleRenderQuickEditor = () => {};
  return (
    <div
      className="task-item task-item-details"
      onMouseEnter={(e) => setVisible(true)}
      onMouseLeave={(e) => setVisible(false)}
    >
      {window ? <div className="task-window">Hi Im task Window</div> : null}
      <div className="task-item-note">
        <span onClick={(e) => setWindow(true)}>{task.note}</span>
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
