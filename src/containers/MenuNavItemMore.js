import React from "react";
import DelBoardBtn from "../components/DelBoardBtn";
import BoardShareLink from "../components/BoardShareLink";

const MenuNavItemMore = props => {
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
            More Options
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
          <DelBoardBtn />
          <div
            style={{ paddingTop: "10px", paddingBottom: "10px", width: "100%" }}
          >
            <hr />
          </div>
          <BoardShareLink />
          <div
            style={{ paddingTop: "10px", paddingBottom: "10px", width: "100%" }}
          >
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuNavItemMore;
