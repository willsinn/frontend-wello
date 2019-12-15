import React from "react";
import { connect } from "react-redux";
import { setPage } from "../actions/user";

const ProfileMenu = (props, { dispatch }) => {
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
          <div onClick={e => props.dispatch(setPage("profile"))}>
            View Profile
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect()(ProfileMenu);
