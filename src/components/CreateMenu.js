import React from "react";

const CreateMenu = () => {
  return (
    <div className="new-board popup">
      <div className="popup-header">
        <div className="popup-header title">Create</div>
        <div className="popup-header close">X</div>
      </div>
      <div className="popup new-option">
        <div className="new-option title">
          <div className="main-icon" />
          <div>Create Board...</div>
        </div>
        <div className="new-option desc">
          <span>
            A board is made up of cards ordered on lists. Use it to manage
            projects, track information, or organize anything.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreateMenu;
