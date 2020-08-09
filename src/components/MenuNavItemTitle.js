import React from "react";

const MenuNavItemTitle = ({ setSidebar, setContent, resetClosedSidebar }) => {
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
            Update Board Title
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
          <div className="">Add Search Bar Eventually</div>
        </div>
      </div>
    </div>
  );
};

export default MenuNavItemTitle;
