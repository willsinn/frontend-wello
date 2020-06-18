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
import { connect } from "react-redux";
import { setPage } from "../actions/user";
import { fetchWorkspace } from "../actions/workspace";
import { removeStarred } from "../actions/boards";

const BoardItem = ({ board, user, sidelist, closeSidelist, dispatch }) => {
  const handleClick = (e, actionType) => {
    if (e) {
      switch (actionType) {
        case "star":
          return dispatch(removeStarred(board));

        case "workspace":
          dispatch(setPage("board"));
          return dispatch(fetchWorkspace({ board, user }));
        default:
          return;
      }
    }
  };
  const renderBg = () => {
    switch (board.background) {
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
      case "iceland":
        return { backgroundImage: `url(${Iceland})` };
      default:
        return { background: "blue" };
    }
  };
  return (
    <div
      style={renderBg()}
      onClick={(e) => {
        handleClick(e, "workspace");
      }}
      className="board-item"
    >
      <span className="board-name">{board.title}</span>
      <div style={{ height: "20px", width: "20px" }}>
        {board.starred ? (
          <button
            onClick={(e) => {
              handleClick(e, "star");
            }}
          >
            <span className="tile-star">☆</span>
          </button>
        ) : null}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};
export default connect(mapStateToProps)(BoardItem);
