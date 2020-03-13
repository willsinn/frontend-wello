import React, { useState } from "react";

const BoardMenuNavList = () => {
  return (
    <ul className="board-menu-nav-list">
      <li className="board-menu-nav-item">
        <span className="board-menu-nav-btn">
          <span className="board-menu-nav-icon">🏀</span>
          <span>About This Board</span>
        </span>
      </li>
      <li className="board-menu-nav-item">
        <span className="board-menu-nav-btn">
          <span className="board-menu-nav-icon">🏀</span>
          <span>Change Background</span>
        </span>
      </li>
      <li className="board-menu-nav-item">
        <span className="board-menu-nav-btn">
          <span className="board-menu-nav-icon">🏀</span>
          <span>Search Cards</span>
        </span>
      </li>
      <li className="board-menu-nav-item">
        <span className="board-menu-nav-btn">
          <span className="board-menu-nav-icon">...</span>
          <span>Show More</span>
        </span>
      </li>
    </ul>
  );
};
export default BoardMenuNavList;
