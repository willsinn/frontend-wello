import React, { useState } from "react";

const BoardMenuNavList = props => {
  return (
    <div className="board-menu-container">
      <div className="board-menu-sidebar-content">
        <div className="board-menu-header-content">
          <h3 className="board-menu-header-title js-board-menu-title-text">
            Menu
          </h3>
          <button
            className="board-menu-close-btn"
            onClick={e => props.setSidebar(false)}
          >
            x
          </button>
        </div>
        <hr />
        <div className="board-menu-content">
          <ul className="board-menu-nav-list">
            <li
              className="board-menu-nav-item"
              onClick={e => props.setContent("about")}
            >
              <span className="board-menu-nav-btn">
                <span className="board-menu-nav-icon">🏀</span>
                <span>About This Board</span>
              </span>
            </li>
            <li
              className="board-menu-nav-item"
              onClick={e => props.setContent("bg")}
            >
              <span className="board-menu-nav-btn">
                <span className="board-menu-nav-icon">🏀</span>
                <span>Change Background</span>
              </span>
            </li>
            <li
              className="board-menu-nav-item"
              onClick={e => props.setContent("search")}
            >
              <span className="board-menu-nav-btn">
                <span className="board-menu-nav-icon">🏀</span>
                <span>Search Cards</span>
              </span>
            </li>
            <li
              className="board-menu-nav-item"
              onClick={e => props.setContent("more")}
            >
              <span className="board-menu-nav-btn">
                <span className="board-menu-nav-icon">...</span>
                <span>Show More</span>
              </span>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default BoardMenuNavList;
