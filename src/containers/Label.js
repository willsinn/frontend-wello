import React from "react";
import { connect } from "react-redux";

const Label = ({
  label,
  handleEditLabel,
  handleCreateTaskLabel,
  taskLabel,
}) => {
  return (
    <li className="label-popover-list-item">
      <span
        className={`task-label-${label.color} task-label`}
        onClick={(e) => handleCreateTaskLabel(label.id, taskLabel[0])}
      >
        <p>{label.name}</p>
        {taskLabel[0] ? <span>✓</span> : null}
      </span>
      <div className="name-label-btn-container">
        <button
          className="name-label-btn edit-task-item-btn"
          onClick={(e) => handleEditLabel(label)}
        >
          ✎
        </button>
      </div>
    </li>
  );
};

export default connect()(Label);
