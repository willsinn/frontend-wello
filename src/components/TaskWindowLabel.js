import React from "react";

const TaskWindowLabel = ({ label, openLabelMenu }) => {
  return (
    <li className="task-window-list-item" onClick={(e) => openLabelMenu()}>
      <span
        className={`task-window-label task-label-${label.color} task-label`}
      >
        <p>{label.name}</p>
      </span>
    </li>
  );
};
export default TaskWindowLabel;
