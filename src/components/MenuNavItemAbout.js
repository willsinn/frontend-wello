import React from "react";

const MenuNavItemAbout = props => {
  return (
    <div className="board-menu-container">
      <div className="board-menu-sidebar-content">
        <div class="board-menu-header-content">
          <h3 class="board-menu-header-title js-board-menu-title-text">Menu</h3>
          <button
            className="board-menu-close-btn"
            onClick={e => props.setSidebar(false)}
          >
            x
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default MenuNavItemAbout;
