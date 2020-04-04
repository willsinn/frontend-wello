import React, { useState } from "react";

const Task = props => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className="task-item task-item-details"
      onMouseEnter={e => setVisible(true)}
      onMouseLeave={e => setVisible(false)}
    >
      <div className="task-item-note">
        <span>{props.task.note}</span>
        {visible ? (
          <span
            className="edit-task-item-btn"
            onClick={e => props.renderQuickEditor(e, props.task.note)}
          >
            ✎
          </span>
        ) : null}
      </div>
      <div>
        <span>Desc</span>
      </div>
    </div>
  );
};

export default Task;
