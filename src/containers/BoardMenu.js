import React, { useState } from "react";
import DelBoardBtn from "../components/DelBoardBtn";

const BoardMenu = props => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="board-sidebar">
      <button className="show-menu-btn board-header-btn">
        <span className="icon-sm">...</span>
        <span>Show Menu</span>
      </button>
      <div className="board-menu">
        <div className="board-menu-container">
          <DelBoardBtn workspace={props.workspace} />
        </div>
      </div>
    </div>
  );
};

export default BoardMenu;
