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
        <div className="side-popover-body">labels</div>
      </div>
    </div>
  );
};

export default LabelMenu;
