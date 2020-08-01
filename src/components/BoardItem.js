import React, { useState } from "react";
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
import { toggleStarred } from "../actions/boards";
import { fetchChecklists } from "../actions/checklists";

const BoardItem = ({ board, user, itemContext, closeSidelist, dispatch }) => {
  const [hover, setHover] = useState(false);
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

  const handleToggleStarred = (e) => {
    if (e) {
      dispatch(toggleStarred(board));
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
        <div className="board-item opa" style={renderBg()}>
          <div onMouseLeave={() => setHover(!hover)}>
            <div
              className="side-box-overlay"
              onMouseEnter={() => setHover(!hover)}
            >
              <div
                className="side-left-box"
                onClick={(e) => handleClick(e, "side")}
              />
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
                <button
                  onClick={(e) => handleToggleStarred(e)}
                  style={{
                    height: "100%",
                    width: "40px",
                    position: "absolute",
                    right: "0",
                  }}
                >
                  <span className="tile-star">☆</span>
                </button>
              ) : (
                <>
                  {hover ? (
                    <button
                      onClick={(e) => handleToggleStarred(e)}
                      style={{
                        height: "100%",
                        width: "40px",
                        position: "absolute",
                        right: "0",
                      }}
                    >
                      <span className="black-tile-star">☆</span>
                    </button>
                  ) : null}
                </>
              )}
            </div>
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
              <button onClick={(e) => handleToggleStarred(e)}>
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
