import React from "react";

const MenuActivityList = props => {
  return (
    <ul className="board-menu-nav-list">
      <li
        className="board-menu-nav-item"
        onClick={e => props.setContent("replace-this!")}
      >
        <span className="board-menu-nav-btn">
          <div className="bullet-pt-icon-gray menu-icon" />
          <div style={{ fontWeight: "600" }}>Activity</div>
        </span>
      </li>
      <li
        className="board-menu-nav-item"
        onClick={e => props.setContent("replace-this!")}
      >
        <span className="board-menu-nav-btn activity-item">
          <span className="menu-initials">WS</span>
          <div style={{ fontWeight: "600" }}>Activity</div>
        </span>
      </li>
    </ul>
  );
};

export default MenuActivityList;
