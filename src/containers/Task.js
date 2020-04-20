import React, { useState } from "react";

const Task = ({ task, card, editor, renderQuickEditor }) => {
  const [visible, setVisible] = useState(false);
  const [window, setWindow] = useState(false);
  const handleRenderQuickEditor = (e) => {
    renderQuickEditor(e, task);
  };
  console.log(editor);

  return (
    <div
      className="task-item task-item-details"
      onMouseEnter={(e) => setVisible(true)}
      onMouseLeave={(e) => setVisible(false)}
    >
      {window ? <div className="task-window">Hi Im task Window</div> : null}
      <div onClick={(e) => setWindow(true)} className="task-item-note">
        <span>{task.note}</span>
        {visible ? (
          <span
            className="edit-task-item-btn"
            onClick={handleRenderQuickEditor}
          >
            ✎
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Task;
