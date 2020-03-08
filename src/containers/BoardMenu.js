import React from "react";
import DelBoardBtn from "../components/DelBoardBtn";

const BoardMenu = props => {
  return (
    <div className="board-menu-container">
      <button className="show-menu-btn board-header-btn">
        <span className="icon-sm">...</span>
        <span>Show Menu</span>
      </button>
      <div className="board-menu">
        <DelBoardBtn workspace={props.workspace} />
      </div>
    </div>
  );
};

export default BoardMenu;
