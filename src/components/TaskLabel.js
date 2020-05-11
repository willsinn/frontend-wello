import React from "react";

const TaskLabel = ({ label }) => {
  return (
    <li className="task-labels-list-item">
      <span className={`tlabel-item tlabel-${label.color}`}>{label.name}</span>
    </li>
  );
};

export default TaskLabel;
