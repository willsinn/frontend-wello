import React from "react";

const NotificationsDropdown = props => {
  return (
    <div className="notifications right-modal">
      <div className="modal-header title">
        <div className="modal-header label">Notifications</div>
        <div className="modal-header close">
          <button>
            <span onClick={e => props.closeRightnav(e)}>×</span>
          </button>
        </div>
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
