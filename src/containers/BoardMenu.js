import React, { useState } from "react";
import BoardMenuNavList from "./BoardMenuNavList";
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
  const resetClosedSidebar = e => {
    if (e) {
      setSidebar(false);
      setContent("");
    }
  };
  return (
    <div className="board-sidebar">
      <button onClick={e => setSidebar(true)} className="board-header-btn">
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
                  resetClosedSidebar={resetClosedSidebar}
                />
              );
            case "bg":
              return (
                <MenuNavItemBackground
                  workspace={props.workspace}
                  setSidebar={setSidebar}
                  setContent={setContent}
                  resetClosedSidebar={resetClosedSidebar}
                  findBg={props.findBg}
                  bgOptions={props.bgOptions}
                  changeBackground={props.changeBackground}
                />
              );
            case "search":
              return (
                <MenuNavItemSearch
                  setSidebar={setSidebar}
                  setContent={setContent}
                  resetClosedSidebar={resetClosedSidebar}
                />
              );
            case "more":
              return (
                <MenuNavItemMore
                  setSidebar={setSidebar}
                  setContent={setContent}
                  workspace={props.workspace}
                  resetClosedSidebar={resetClosedSidebar}
                />
              );
            default:
              return (
                <BoardMenuNavList
                  setSidebar={setSidebar}
                  setContent={setContent}
                  currBg={props.workspace.background}
                />
              );
          }
        })()}
      </div>
    </div>
  );
};

export default BoardMenu;
