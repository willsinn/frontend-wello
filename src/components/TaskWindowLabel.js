import React from "react";

const TaskWindowLabel = ({ label }) => {
  console.log(label);
  return (
    <li className="label-popover-list-item">
      <span
        className={`task-window-label task-label-${label.color} task-label`}
      >
        <p>{label.name}</p>
      </span>
    </li>
  );
};
export default TaskWindowLabel;
