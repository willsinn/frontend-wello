import React from "react";

const NotificationsMenu = props => {
  return (
    <div className="notifications right-popup">
      <div className="popup-header title">
        <div className="popup-header label">Notifications</div>
        <div className="popup-header close">
          <button>
            <span onClick={e => props.close(e)}>×</span>
          </button>
        </div>
      </div>
      <div className="popup new-option">
        <div className="all-nots title">
          <div onClick={e => props.close(e)}>View All</div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsMenu;
