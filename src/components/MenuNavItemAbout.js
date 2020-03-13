import React from "react";

const MenuNavItemAbout = props => {
  return (
    <div className="board-menu-container">
      <div className="board-menu-sidebar-content">
        <div class="board-menu-header-content">
          <button onClick={e => props.setContent("")}>〈</button>
          <h3 class="board-menu-header-title js-board-menu-title-text">
            About This Board
          </h3>
          <button
            className="board-menu-close-btn"
            onClick={e => props.resetClosedSidebar(e)}
          >
            ✕
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default MenuNavItemAbout;
