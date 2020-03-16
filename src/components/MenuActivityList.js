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
        <span className="menu-icon board-menu-nav-btn activity-item">
          <span className="initials-wrap menu-icon menu-initials">WS</span>
          <div className="activity-item">
            <span>William Sinn </span>
            <span style={{ fontWeight: "400" }}>
              on filler Activity 1, an action hes made on any Wello board.
              Describe the action further.
            </span>
            <div style={{ fontWeight: "300", fontSize: "12px" }}>
              Jan 8, 2020 at 1:45PM
            </div>
          </div>
        </span>
      </li>
      <li
        className="board-menu-nav-item"
        onClick={e => props.setContent("replace-this!")}
      >
        <span className="menu-icon board-menu-nav-btn activity-item">
          <span className="initials-wrap menu-icon menu-initials">WS</span>
          <div className="activity-item">
            <span>William Sinn </span>
            <span style={{ fontWeight: "400" }}>
              on filler Activity 2, an action hes made on any Wello board.
              Describe the action further.
            </span>
            <div style={{ fontWeight: "300", fontSize: "12px" }}>
              Jan 11, 2020 at 6:20AM
            </div>
          </div>
        </span>
      </li>
      <li
        className="board-menu-nav-item"
        onClick={e => props.setContent("replace-this!")}
      >
        <span className="menu-icon board-menu-nav-btn activity-item">
          <span className="initials-wrap menu-icon menu-initials">WS</span>
          <div className="activity-item">
            <span>William Sinn </span>
            <span style={{ fontWeight: "400" }}>
              on filler Activity 3, an action hes made on any Wello board.
              Describe the action further.
            </span>
            <div style={{ fontWeight: "300", fontSize: "12px" }}>
              Jan 22, 2020 at 2:33PM
            </div>
          </div>
        </span>
      </li>
      <li
        className="board-menu-nav-item"
        onClick={e => props.setContent("replace-this!")}
      >
        <span className="menu-icon board-menu-nav-btn activity-item">
          <span className="initials-wrap menu-icon menu-initials">WS</span>
          <div className="activity-item">
            <span>William Sinn </span>
            <span style={{ fontWeight: "400" }}>
              on Activity 1, an action hes made on any Wello board. Describe the
              action further.
            </span>
            <div style={{ fontWeight: "300", fontSize: "12px" }}>
              Feb 2, 2020 at 11:11PM
            </div>
          </div>
        </span>
      </li>
      <li
        className="board-menu-nav-item"
        onClick={e => props.setContent("replace-this!")}
      >
        <span className="menu-icon board-menu-nav-btn activity-item">
          <span className="initials-wrap menu-icon menu-initials">WS</span>
          <div className="activity-item">
            <span>William Sinn </span>
            <span style={{ fontWeight: "400" }}>
              on filler Activity 4, an action hes made on any Wello board.
              Describe the action further.
            </span>
            <div style={{ fontWeight: "300", fontSize: "12px" }}>
              Feb 16, 2020 at 10:03AM
            </div>
          </div>
        </span>
      </li>
    </ul>
  );
};

export default MenuActivityList;
