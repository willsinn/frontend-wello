import React, { useState } from "react";
import BoardMenuNavList from "./BoardMenuNavList";
import DelBoardBtn from "../components/DelBoardBtn";

const BoardMenu = props => {
  const [sidebar, setSidebar] = useState(false);
  const renderSidebar = () => {
    return !sidebar ? { transform: "translateX(339px)" } : null;
  };
  return (
    <div className="board-sidebar">
      <button
        onClick={e => setSidebar(true)}
        className="show-menu-btn board-header-btn"
      >
        <span className="icon-sm">...</span>
        <span>Show Menu</span>
      </button>

      <div className="board-menu" style={renderSidebar()}>
        <div className="board-menu-container">
          <div className="board-menu-sidebar-content">
            <div class="board-menu-header-content">
              <h3 class="board-menu-header-title js-board-menu-title-text">
                Menu
              </h3>
              <button
                className="board-menu-close-btn"
                onClick={e => setSidebar(false)}
              >
                x
              </button>
            </div>
            <BoardMenuNavList />
            <DelBoardBtn workspace={props.workspace} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMenu;
