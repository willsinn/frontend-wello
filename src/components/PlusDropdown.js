import React from "react";

const PlusDropdown = props => {
  return (
    <div className="new-board right-popup">
      <div className="popup-header title">
        <div className="popup-header label">Create</div>
        <div className="popup-header close">
          <button>
            <span onClick={e => props.close(e)}>×</span>
          </button>
        </div>
      </div>
      <div className="popup new-option">
        <div className="new-option title">
          <div className="main-icon" />
          <div>Create Board...</div>
        </div>
        <div className="new-option desc" style={{ color: "black" }}>
          <span onClick={e => props.close(e)}>
            A board is made up of cards ordered on lists. Use it to manage
            projects, track information, or organize anything.
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlusDropdown;
