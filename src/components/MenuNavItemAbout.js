import React from "react";
import { connect } from "react-redux";

const MenuNavItemAbout = ({ user, setContent, setSidebar }) => {
  const nameSplit = user.name.split(" ");
  const renderInitials = () => {
    let initials = "";
    const nameSplit = user.name.split(" ");
    if (nameSplit) {
      nameSplit.forEach((letter) => {
        const first = letter[0].toUpperCase();
        initials += first;
      });
    }
    if (initials.length === 1) {
      initials += initials;
    }
    if (initials.length > 2) {
      const limit = initials.slice(0, 1);
      initials = limit;
    }
    return initials;
  };

  return (
    <div className="board-menu-container">
      <div className="board-menu-sidebar-content">
        <div className="board-menu-header-content">
          <button
            className="board-menu-back-btn"
            onClick={(e) => setContent("")}
          >
            <span className="back-text">←</span>
          </button>
          <h3 className="board-menu-header-title js-board-menu-title-text">
            About This Board
          </h3>
          <button
            className="board-menu-close-btn"
            onClick={(e) => setSidebar(false)}
          >
            <span className="close-text">✕</span>
          </button>
        </div>
        <hr />
        <div className="board-menu-content">
          <ul className="board-menu-nav-list">
            <li className="board-menu-nav-item">
              <span className="norm-item-content">
                <div className="user-profile-icon" />
                <div> Made By </div>
              </span>
            </li>

            <li className="board-menu-nav-item">
              <span className="norm-item-content">
                <div className="about-user-initials">
                  <span className="menu-icon board-menu-nav-btn activity-item">
                    <span className="initials-wrap menu-icon menu-initials">
                      {renderInitials()}
                    </span>
                    <div>{user.name}</div>
                    <div>@{nameSplit[0]}1</div>
                  </span>
                </div>
              </span>
            </li>
            <hr />
            <li className="board-menu-nav-item">
              <span className="norm-item-content">
                <div className="desc-icon" />
                <div> Description </div>
              </span>
            </li>
            <li className="board-menu-nav-item">DESCRIPTION</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { user: state.userReducer.user };
};

export default connect(mapStateToProps)(MenuNavItemAbout);
