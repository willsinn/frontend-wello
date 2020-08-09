import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setPage, userLogout } from "../actions/user";

const ProfileDropdown = ({ user, closeRightnav, activePage, dispatch }) => {
  const renderCapsName = () => {
    if (user) {
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
    }
  };

  return (
    <div className="new-board right-modal">
      <div className="dropdown-title ">
        <div className="dropdown-label">{`${renderCapsName()} (${
          user.email
        })`}</div>
        <hr />
        <div className="dropdown-title-close">
          <button>
            <span
              className="dropdown-title-close-btn"
              onClick={(e) => closeRightnav(e)}
            >
              ×
            </span>
          </button>
        </div>
      </div>
      {activePage === "board" ? (
        <ul>
          <li className="option-item">
            <a
              href="/"
              className="option-title js-member-account"
              style={{ textDecoration: "none" }}
            >
              <span>Interface</span>
            </a>
          </li>
          <li className="option-item">
            <Link
              to="/"
              onClick={(e) => dispatch(userLogout(), closeRightnav(e))}
              className="option-title js-member-account"
              data-tab="settings"
            >
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li className="option-item">
            <button
              onClick={(e) => dispatch(setPage("boards"), closeRightnav(e))}
              className="option-title js-member-activity active"
              data-tab="cards"
            >
              <span>Boards</span>
            </button>
          </li>

          <li className="option-item">
            <button
              onClick={(e) => dispatch(setPage("archives"), closeRightnav(e))}
              className="option-title js-member-activity active"
              data-tab="cards"
            >
              <span>Archives</span>
            </button>
          </li>
          <li className="option-item">
            <button
              onClick={(e) => dispatch(setPage("settings"), closeRightnav(e))}
              className="option-title js-member-activity active"
              data-tab="cards"
            >
              <span>Settings</span>
            </button>
          </li>
          <hr />
          <li className="option-item">
            <button
              onClick={(e) => dispatch(userLogout(), closeRightnav(e))}
              className="option-title js-member-account"
              data-tab="settings"
            >
              <span>Logout</span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  activePage: state.userReducer.activePage,
});
export default connect(mapStateToProps)(ProfileDropdown);
