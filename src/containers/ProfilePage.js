import React from "react";
import About from "../components/About";
import { connect } from "react-redux";

const ProfilePage = ({ user }) => {
  const selectTabStyle = {
    "background-color": "transparent",
  };
  console.log(user);

  return (
    <>
      <div className="profile-page">
        <div className="tabbed-profile-header">
          <div className="tabbed-profile-header wrapper">
            <div className="profile-nicknames">
              <span className="user-initials">WS</span>
              <span className="user-fullname">William Sinn</span>
              <span className="user-handle">@WilliamSinn1</span>
            </div>
          </div>
        </div>
      </div>
      <div className="tabbed-pane-nav u-clearfix js-nav">
        <ul>
          <li className="tabbed-pane-nav-item">
            <a
              href="/profile"
              className="tabbed-pane-nav-item-button js-member-profile"
              data-tab="profile"
              style={selectTabStyle}
            >
              Profile and Visibility
            </a>
          </li>
          <li className="tabbed-pane-nav-item">
            <button
              className="tabbed-pane-nav-item-button js-member-activity active"
              data-tab="cards"
            >
              Activity
            </button>
          </li>
          <li className="tabbed-pane-nav-item">
            <button
              className="tabbed-pane-nav-item-button js-member-cards"
              data-tab="cards"
            >
              Cards
            </button>
          </li>
          <li className="tabbed-pane-nav-item">
            <button
              className="tabbed-pane-nav-item-button js-member-account"
              data-tab="settings"
            >
              Settings
            </button>
          </li>
        </ul>
      </div>
      <About />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};
export default connect(mapStateToProps)(ProfilePage);
