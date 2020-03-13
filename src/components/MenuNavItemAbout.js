import React from "react";

const MenuNavItemAbout = props => {
  return (
    <div className="board-menu-container">
      <div className="board-menu-sidebar-content">
        <div className="board-menu-header-content">
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
        <div>
          <div>
            <h2>
              <span>Profile Icon</span>
              <span>Made By</span>
            </h2>
          </div>
          <div> Board Creator </div>
        </div>
        <div>
          <div>
            <h2>
              <span>Desc Icon</span>
              <span>Description</span>
            </h2>
          </div>
          <div> Description Box </div>
        </div>
      </div>
    </div>
  );
};

export default MenuNavItemAbout;
