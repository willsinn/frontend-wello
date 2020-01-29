import React from "react";
import { connect } from "react-redux";
import { setPage } from "../actions/user";

const ProfileDropdown = (props, { dispatch }) => {
  return (
    <div className="board right-popup">
      <div className="popup-header title">
        <div className="popup-header label">William Sinn</div>
        <div className="popup-header close">
          <button>
            <span onClick={e => props.close(e)}>×</span>
          </button>
        </div>
      </div>
      <ul>
        <li class="popup option-item">
          <a
            onClick={e => props.dispatch(setPage("profile"), props.close(e))}
            class="option-title js-member-profile"
            data-tab="profile"
          >
            <span>Profile and Visibility</span>
          </a>
        </li>
        <li class="popup option-item">
          <a
            onClick={e => props.dispatch(setPage("profile"), props.close(e))}
            class="option-title js-member-activity active"
            data-tab="cards"
          >
            <span> Activity</span>
          </a>
        </li>
        <li class="popup option-item">
          <a
            onClick={e => props.dispatch(setPage("profile"), props.close(e))}
            class="option-title js-member-cards"
            data-tab="cards"
          >
            <span>Cards</span>
          </a>
        </li>
        <li class="popup option-item">
          <a
            onClick={e => props.dispatch(setPage("profile"), props.close(e))}
            class="option-title js-member-account"
            data-tab="settings"
          >
            <span> Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default connect()(ProfileDropdown);
