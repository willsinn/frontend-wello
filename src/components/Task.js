import React from "react";

const Task = props => {
  return (
    <div className="task-item task-item-details">
      <div classname="task-item-note">
        <span>{props.task.note}</span>
        <span className="edit-task-item-btn">edit</span>
      </div>
      <div>
        <span>Desc</span>
      </div>
    </div>
  );
};

export default Task;
