import React from "react";

const NotificationsDropdown = (props) => {
  return (
    <div className="notifications right-modal">
      <div className="dropdown-title">
        <div className="dropdown-label">Notifications</div>
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
        <hr />
      </div>
      <div className="new-option">
        <div className="all-nots title">
          <div>View All</div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsDropdown;
