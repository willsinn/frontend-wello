import React from "react";
import { connect } from "react-redux";

const Label = ({ label }) => {
  return (
    <li className="label-popover-list-item">
      <span className="task-label-green task-label">
        <p>text</p>
      </span>
      <div className="name-label-btn-container">
        <button className="name-label-btn">✐</button>
      </div>
    </li>
  );
};

export default connect()(Label);
