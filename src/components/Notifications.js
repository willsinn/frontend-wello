import React from "react";
import { connect } from "react-redux";
import { setNull } from "../actions/user";

const Notifications = (props, { dispatch }) => {
  return (
    <div className="notifications right-popup">
      <div className="popup-header title">
        <div className="popup-header label">Notifications</div>
        <div className="popup-header close">
          <button>
            <span onClick={e => props.dispatch(setNull(e))}>×</span>
          </button>
        </div>
      </div>
      <div className="popup new-option">
        <div className="all-nots title">
          <div>View All</div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ userReducer: isActive }) => ({
  isActive: isActive.isActive
});

export default connect(mapStateToProps)(Notifications);
