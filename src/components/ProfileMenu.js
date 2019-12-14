import React from "react";

const ProfileMenu = props => {
  return (
    <div className="new-board right-popup">
      <div className="popup-header title">
        <div className="popup-header label">William Sinn</div>
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
      </div>
    </div>
  );
};
export default ProfileMenu;
