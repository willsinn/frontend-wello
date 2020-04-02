import React from "react";
import About from "../components/About";

const ProfilePage = () => {
  const selectTabStyle = {
    "background-color": "transparent"
  };
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
      <div class="tabbed-pane-nav u-clearfix js-nav">
        <ul>
          <li class="tabbed-pane-nav-item">
            <button
              class="tabbed-pane-nav-item-button js-member-profile"
              data-tab="profile"
              style={selectTabStyle}
            >
              Profile and Visibility
            </button>
          </li>
          <li class="tabbed-pane-nav-item">
            <button
              class="tabbed-pane-nav-item-button js-member-activity active"
              data-tab="cards"
            >
              Activity
            </button>
          </li>
          <li class="tabbed-pane-nav-item">
            <button
              class="tabbed-pane-nav-item-button js-member-cards"
              data-tab="cards"
            >
              Cards
            </button>
          </li>
          <li class="tabbed-pane-nav-item">
            <button
              class="tabbed-pane-nav-item-button js-member-account"
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

export default ProfilePage;
