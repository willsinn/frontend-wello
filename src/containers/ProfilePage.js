import React from "react";

const ProfilePage = () => {
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
            <a
              class="tabbed-pane-nav-item-button js-member-profile"
              data-tab="profile"
            >
              Profile and Visibility
            </a>
          </li>
          <li class="tabbed-pane-nav-item">
            <a
              class="tabbed-pane-nav-item-button js-member-activity active"
              data-tab="cards"
            >
              Activity
            </a>
          </li>
          <li class="tabbed-pane-nav-item">
            <a
              class="tabbed-pane-nav-item-button js-member-cards"
              data-tab="cards"
            >
              Cards
            </a>
          </li>
          <li class="tabbed-pane-nav-item">
            <a
              class="tabbed-pane-nav-item-button js-member-account"
              data-tab="settings"
            >
              Settings
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfilePage;
