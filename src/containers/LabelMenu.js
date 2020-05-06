import React from "react";

const LabelMenu = ({ closePopup }) => {
  return (
    <div className="label-menu side-popover">
      <div className="no-back">
        <div className="side-popover-header">
          <span className="side-popover-header-title">Labels</span>
          <button onClick={(e) => closePopup()} className="side-close-btn">
            ✕
          </button>
        </div>
        labels
        <div className="side-popover-body">
          <ul className="label-popover-list">
            <li className="label-popover-list-item">
              <span className="task-label-green task-label">
                <p>text</p>
              </span>
              <div className="name-label-btn-container">
                <button className="name-label-btn">✐</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LabelMenu;
