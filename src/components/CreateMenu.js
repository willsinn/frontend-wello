import React from "react";
import { connect } from "react-redux";
import { setNull } from "../actions/user";

const CreateMenu = (props, { dispatch }) => {
  return (
    <div className="new-board popup">
      <div className="popup-header title">
        <div className="popup-header label">Create</div>
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
const mapStateToProps = ({ userReducer: isActive }) => ({
  isActive: isActive.isActive
});

export default connect(mapStateToProps)(CreateMenu);
