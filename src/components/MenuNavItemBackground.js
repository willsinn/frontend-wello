import React from "react";
import Lake from "../images/lake.jpg";
import Mountians from "../images/mountians.jpg";
import Cityscape from "../images/cityscape.jpg";
import City from "../images/city.jpeg";
import Iceland from "../images/iceland.jpg";
import Meadow from "../images/meadow.jpg";
import Waterfall from "../images/waterfall.jpeg";
import Beach from "../images/beach.jpg";
import Autumn from "../images/autumn.jpg";

const MenuNavItemBackground = props => {
  const renderBgOptions = () => {
    return props.bgOptions.map(bgOption => {
      return (
        <li
          key={`bg-${bgOption}-${props.workspace.id}`}
          className="board-bg-select"
        >
          <span className="menu-bg-tile">
            <div className="photo-option-bg" style={props.findBg(bgOption)} />
          </span>
        </li>
      );
    });
  };

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
            Change Background
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
          <ul className="board-bgs-list">{renderBgOptions()}</ul>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ boardsReducer: bgs }) => ({
  bgs: bgs.bgs
});
export default MenuNavItemBackground;
