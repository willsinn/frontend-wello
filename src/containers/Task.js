import React from "react";
import QuickTaskEditor from "../components/QuickTaskEditor";

const Task = props => {
  return (
    <div className="task-item task-item-details">
      <QuickTaskEditor />
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
