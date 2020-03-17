import React from "react";
import BgList from "./BgList";

const MenuNavItemBackground = props => {
  return (
    <div className="board-menu-container">
      <div className="board-menu-sidebar-content">
        <div className="board-menu-header-content">
          <button
            className="board-menu-back-btn"
            onClick={e => props.setContent("")}
          >
            <span className="back-text">←</span>
          </button>
          <h3 className="board-menu-header-title js-board-menu-title-text">
            About This Board
          </h3>
          <button
            className="board-menu-close-btn"
            onClick={e => props.setSidebar(false)}
          >
            <span className="close-text">✕</span>
          </button>
        </div>
        <hr />
        <div className="board-menu-content">
          <div className="menu-background-tiles-container">
            <div className="">Photos</div>
            <div className="">Colors</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuNavItemBackground;
