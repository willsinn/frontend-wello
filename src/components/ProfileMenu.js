import React from "react";
import { connect } from "react-redux";
import { setNull } from "../actions/user";

const ProfileMenu = (props, { dispatch }) => {
  return (
    <div className="new-board right-popup">
      <div className="popup-header title">
        <div className="popup-header label">William Sinn</div>
        <div className="popup-header close">
          <button>
            <span onClick={e => props.dispatch(setNull(e))}>×</span>
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
const mapStateToProps = ({ userReducer: isActive }) => ({
  isActive: isActive.isActive
});

export default connect(mapStateToProps)(ProfileMenu);
