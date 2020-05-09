import React from "react";
import { connect } from "react-redux";

const Label = ({ label, handleEditLabel }) => {
  return (
    <li className="label-popover-list-item">
      <span className={`task-label-${label.color} task-label`}>
        <p>{label.name}</p>
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
