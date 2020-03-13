import React, { useState } from "react";
import BoardMenuNavList from "./BoardMenuNavList";
import DelBoardBtn from "../components/DelBoardBtn";

const BoardMenu = props => {
  const [sidebar, setSidebar] = useState(false);
  const [content, setContent] = useState("");
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
        <BoardMenuNavList setSidebar={setSidebar} setContent={setContent} />
      </div>
    </div>
  );
};

export default BoardMenu;
