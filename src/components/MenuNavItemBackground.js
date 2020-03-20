import React from "react";

const MenuNavItemBackground = props => {
  const renderBgOptions = () => {
    return props.bgOptions.map(bgOption => {
      return (
        <li
          key={`bg-${bgOption}-${props.workspace.id}`}
          className="board-bg-select"
        >
          <span
            onClick={e => props.changeBackground(bgOption)}
            className="menu-bg-tile"
          >
            <div className="photo-option-bg" style={props.findBg(bgOption)} />
          </span>
        </li>
      );
    });
  };
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
            Change Background
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
          <ul className="board-bgs-list">{renderBgOptions()}</ul>
        </div>
      </div>
    </div>
  );
};

export default MenuNavItemBackground;
