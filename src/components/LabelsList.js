import React from "react";
import Label from "../containers/Label";

const LabelsList = ({ labels }) => {
  console.log("LABELS_LIST", labels);

  return (
    <ul className="label-popover-list">
      <Label />
      <li className="label-popover-list-item">
        <span className="task-label-green task-label">
          <p>text</p>
        </span>
        <div className="name-label-btn-container">
          <button className="name-label-btn">✐</button>
        </div>
      </li>

      <li className="label-popover-list-item">
        <span className="task-label-yellow task-label">
          <p>text</p>
        </span>
        <div className="name-label-btn-container">
          <button className="name-label-btn">✐</button>
        </div>
      </li>

      <li className="label-popover-list-item">
        <span className="task-label-orange task-label">
          <p>text</p>
        </span>
        <div className="name-label-btn-container">
          <button className="name-label-btn">✐</button>
        </div>
      </li>

      <li className="label-popover-list-item">
        <span className="task-label-red task-label">
          <p>text</p>
        </span>
        <div className="name-label-btn-container">
          <button className="name-label-btn">✐</button>
        </div>
      </li>

      <li className="label-popover-list-item">
        <span className="task-label-purple task-label">
          <p>text</p>
        </span>
        <div className="name-label-btn-container">
          <button className="name-label-btn">✐</button>
        </div>
      </li>

      <li className="label-popover-list-item">
        <span className="task-label-blue task-label">
          <p>text</p>
        </span>
        <div className="name-label-btn-container">
          <button className="name-label-btn">✐</button>
        </div>
      </li>
    </ul>
  );
};

export default LabelsList;
