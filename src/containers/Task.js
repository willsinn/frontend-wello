import React from "react";

const Task = props => {
  return (
    <div className="task-item task-item-details">
      <div className="task-item-note">
        <span>{props.task.note}</span>
        <span
          className="edit-task-item-btn"
          onClick={e => props.renderQuickEditor(e, props.task.note)}
        >
          edit
        </span>
      </div>
      <div>
        <span>Desc</span>
      </div>
    </div>
  );
};

export default Task;
