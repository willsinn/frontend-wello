import React, { useState } from "react";
import BoardMenuNavList from "./BoardMenuNavList";
import DelBoardBtn from "../components/DelBoardBtn";
import MenuNavItemAbout from "../components/MenuNavItemAbout";
import MenuNavItemBackground from "../components/MenuNavItemBackground";
import MenuNavItemSearch from "../components/MenuNavItemSearch";
import MenuNavItemMore from "./MenuNavItemMore";
const BoardMenu = props => {
  const [sidebar, setSidebar] = useState(false);
  const [content, setContent] = useState("");
  const renderSidebar = () => {
    return !sidebar ? { transform: "translateX(339px)" } : null;
  };
  console.log("content state", content);
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
        {(() => {
          switch (content) {
            case "about":
              return (
                <MenuNavItemAbout
                  setSidebar={setSidebar}
                  setContent={setContent}
                />
              );
            case "bg":
              return (
                <MenuNavItemBackground
                  setSidebar={setSidebar}
                  setContent={setContent}
                />
              );
            case "search":
              return (
                <MenuNavItemSearch
                  setSidebar={setSidebar}
                  setContent={setContent}
                />
              );
            case "more":
              return (
                <MenuNavItemMore
                  setSidebar={setSidebar}
                  setContent={setContent}
                />
              );
            default:
              return (
                <BoardMenuNavList
                  setSidebar={setSidebar}
                  setContent={setContent}
                />
              );
          }
        })()}
      </div>
    </div>
  );
};

export default BoardMenu;
