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
import {
  fetchWorkspace,
  clearWorkspace,
  starredBoard,
} from "../actions/workspace";
import { removeStarred } from "../actions/boards";
import { fetchChecklists } from "../actions/checklists";

const BoardItem = ({ board, user, itemContext, closeSidelist, dispatch }) => {
  const handleClick = (e, actionType) => {
    if (e && actionType === "workspace") {
      dispatch(fetchWorkspace({ board, user }));
      dispatch(fetchChecklists());
      dispatch(setPage("board"));
    }
    if (e && actionType === "side") {
      dispatch(fetchWorkspace({ board, user }));
      dispatch(setPage("board"));
      dispatch(fetchChecklists());
      closeSidelist(e);
    }
  };
  const addStarBoard = (e) => {
    if (e) {
      dispatch(starredBoard(board));
    }
  };
  const removeStarBoard = (e) => {
    if (e) {
      dispatch(removeStarred(board));
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
    <>
      {itemContext === "side" ? (
        <div
          className="board-item"
          style={renderBg()}
          onClick={(e) => handleClick(e, "side")}
        >
          <div className="side-box-overlay">
            <div className="side-left-box" />
            <div className="side-right-box">
              <span
                style={{
                  color: "black",
                  fontSize: "14px",
                  fontWeight: "425",
                  marginLeft: "8px",
                  textTransform: "none",
                }}
              >
                {board.title}
              </span>
            </div>

            {board.starred ? (
              <div
                style={{
                  height: "24px",
                  width: "24px",
                  position: "absolute",
                  top: "12px",
                  right: "0",
                }}
              >
                <button onClick={(e) => removeStarBoard(e)}>
                  <span className="tile-star">☆</span>
                </button>
              </div>
            ) : (
              <div
                style={{
                  height: "24px",
                  width: "24px",
                  position: "absolute",
                  top: "12px",
                  right: "0",
                }}
              >
                <button onClick={(e) => addStarBoard(e)}>
                  <span className="black-tile-star">☆</span>
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div style={renderBg()} className="board-item">
          <div
            style={{ width: "100%", height: "72px" }}
            onClick={(e) => handleClick(e, "workspace")}
          >
            <span className="board-name">{board.title}</span>
          </div>
          <div style={{ height: "24px", width: "24px" }}>
            {board.starred ? (
              <button onClick={(e) => removeStarBoard(e)}>
                <span className="tile-star">☆</span>
              </button>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};
export default connect(mapStateToProps)(BoardItem);
