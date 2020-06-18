import React from "react";
import { connect } from "react-redux";
import { setPage, userLogout } from "../actions/user";

const ProfileDropdown = ({ user, closeRightnav, dispatch }) => {
  const renderCapsName = () => {
    const names = user.name.split(" ");
    let namesCaps;
    if (names) {
      names.forEach((name, index) => {
        let capitalized = name[0].toUpperCase();
        capitalized = capitalized + name.slice(1, name.length);
        if (index === 0) {
          namesCaps = capitalized;
        }
        if (index > 0) {
          namesCaps = namesCaps + " " + capitalized;
        }
      });
    }
    return namesCaps;
  };
  return (
    <div className="new-board right-modal">
      <div className="dropdown-title ">
        <div className="dropdown-label">{`${renderCapsName()} (${
          user.email
        })`}</div>
        <hr />
        <div className="modal-header close">
          <button>
            <span onClick={(e) => closeRightnav(e)}>×</span>
          </button>
        </div>
      </div>
      <ul>
        <li className="option-item">
          <button
            onClick={(e) => dispatch(setPage("profile"), closeRightnav(e))}
            className="option-title js-member-profile"
            data-tab="profile"
          >
            <span>Profile and Visibility</span>
          </button>
        </li>
        <li className="option-item">
          <button
            onClick={(e) => dispatch(setPage("profile"), closeRightnav(e))}
            className="option-title js-member-activity active"
            data-tab="cards"
          >
            <span> Activity</span>
          </button>
        </li>
        <li className="option-item">
          <button
            onClick={(e) => dispatch(setPage("profile"), closeRightnav(e))}
            className="option-title js-member-cards"
            data-tab="cards"
          >
            <span>Cards</span>
          </button>
        </li>
        <li className="option-item">
          <button
            onClick={(e) => dispatch(setPage("profile"), closeRightnav(e))}
            className="option-title js-member-account"
            data-tab="settings"
          >
            <span> Settings</span>
          </button>
        </li>
        <hr />
        <li className="option-item">
          <button
            onClick={(e) => dispatch(userLogout(), closeRightnav(e))}
            className="option-title js-member-account"
            data-tab="settings"
          >
            <span> Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});
export default connect(mapStateToProps)(ProfileDropdown);
