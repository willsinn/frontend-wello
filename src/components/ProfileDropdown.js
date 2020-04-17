import React from "react";
import { connect } from "react-redux";
import { setPage } from "../actions/user";

const ProfileDropdown = (props, { dispatch }) => {
  return (
    <div className="new-board right-modal">
      <div className="modal-header title">
        <div className="modal-header label">William Sinn (williamsinn1)</div>
        <div className="modal-header close">
          <button>
            <span onClick={e => props.closeRightnav(e)}>×</span>
          </button>
        </div>
      </div>
      <ul>
        <li className="option-item">
          <button
            onClick={e =>
              props.dispatch(setPage("profile"), props.closeRightnav(e))
            }
            className="option-title js-member-profile"
            data-tab="profile"
          >
            <span>Profile and Visibility</span>
          </button>
        </li>
        <li className="option-item">
          <button
            onClick={e =>
              props.dispatch(setPage("profile"), props.closeRightnav(e))
            }
            className="option-title js-member-activity active"
            data-tab="cards"
          >
            <span> Activity</span>
          </button>
        </li>
        <li className="option-item">
          <button
            onClick={e =>
              props.dispatch(setPage("profile"), props.closeRightnav(e))
            }
            className="option-title js-member-cards"
            data-tab="cards"
          >
            <span>Cards</span>
          </button>
        </li>
        <li className="option-item">
          <button
            onClick={e =>
              props.dispatch(setPage("profile"), props.closeRightnav(e))
            }
            className="option-title js-member-account"
            data-tab="settings"
          >
            <span> Settings</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
export default connect()(ProfileDropdown);
