import React from "react";
import MenuActivityList from "../components/MenuActivityList";

import Lake from "../images/lake.jpg";
import Mountians from "../images/mountians.jpg";
import Cityscape from "../images/cityscape.jpg";
import City from "../images/city.jpeg";
import Iceland from "../images/iceland.jpg";
import Meadow from "../images/meadow.jpg";
import Waterfall from "../images/waterfall.jpeg";
import Beach from "../images/beach.jpg";
import Autumn from "../images/autumn.jpg";

const BoardMenuNavList = props => {
  const renderCurrBg = () => {
    switch (props.currBg) {
      case "lake":
        return { backgroundImage: `url(${Lake})` };
      case "mountians":
        return { backgroundImage: `url(${Mountians})` };
      case "cityscape":
        return { backgroundImage: `url(${Cityscape})` };
      case "beach":
        return { backgroundImage: `url(${Beach})` };
      case "autumn":
        return { backgroundImage: `url(${Autumn})` };
      case "waterfall":
        return { backgroundImage: `url(${Waterfall})` };
      case "city":
        return { backgroundImage: `url(${City})` };
      case "meadow":
        return { backgroundImage: `url(${Meadow})` };
      default:
        return { backgroundImage: `url(${Iceland})` };
    }
  };
  return (
    <div className="board-menu-container">
      <div className="board-menu-sidebar-content">
        <div className="board-menu-header-content">
          <h3 className="board-menu-header-title js-board-menu-title-text">
            Menu
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
          <ul className="board-menu-nav-list">
            <li
              className="board-menu-nav-item"
              onClick={e => props.setContent("about")}
            >
              <span className="board-menu-nav-btn">
                <div className="wello-icon-gray menu-icon" />
                <div>About This Board</div>
                <div className="board-option-summary">
                  Add a description to your board.
                </div>
              </span>
            </li>
            <li
              className="board-menu-nav-item"
              onClick={e => props.setContent("bg")}
            >
              <span className="board-menu-nav-btn">
                <div
                  className="current-board-bg bg-btn"
                  style={renderCurrBg()}
                />
                <div>Change Background</div>
              </span>
            </li>
            <li
              className="board-menu-nav-item"
              onClick={e => props.setContent("search")}
            >
              <span className="board-menu-nav-btn">
                <div className="search-icon-gray menu-icon" />
                <span>Search Cards</span>
              </span>
            </li>
            <li
              className="board-menu-nav-item"
              onClick={e => props.setContent("more")}
            >
              <span className="board-menu-nav-btn">
                <div className="dots-icon-gray menu-icon">...</div>
                <span>More</span>
              </span>
            </li>
          </ul>
          <hr style={{ margin: "16px" }} />
          <MenuActivityList />
        </div>
      </div>
    </div>
  );
};
export default BoardMenuNavList;
