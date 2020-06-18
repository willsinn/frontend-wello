import React from "react";

const PlusDropdown = (props) => {
  return (
    <div className="new-board right-modal">
      <div className="dropdown-title">
        <div className="dropdown-label">Create</div>
        <div className="dropdown-title-close">
          <button>
            <span
              className="dropdown-title-close-btn"
              onClick={(e) => props.closeRightnav(e)}
            >
              ×
            </span>
          </button>
        </div>
      </div>
      <div className="create-board">
        <button
          className="create-board-btn"
          onClick={(e) => props.openModal(e)}
        >
          <div style={{ display: "flex" }}>
            <span className="icon main-icon" />
            <span style={{ paddingLeft: "4px" }}> Create Board...</span>
          </div>
          <span>
            A board is made up of cards ordered on lists. Use it to manage
            projects, track information, or organize anything.
          </span>
        </button>
      </div>
    </div>
  );
};

export default PlusDropdown;
