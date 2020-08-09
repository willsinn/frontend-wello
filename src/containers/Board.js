import React, { useState } from "react";
import CardList from "../components/CardList";
import BoardMenu from "./BoardMenu";
import NavBar from "./NavBar";
import EditBoardTitle from "../components/EditBoardTitle";

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
import { starredBoard } from "../actions/workspace";
import { updateBoardBackground } from "../actions/boards";
import { fetchLabels, fetchTaskLabels } from "../actions/labels";
import { Redirect } from "react-router-dom";

const bgs = [
  "iceland",
  "lake",
  "mountians",
  "cityscape",
  "beach",
  "autumn",
  "waterfall",
  "city",
  "meadow",
];
const Board = ({ workspace, dispatch }) => {
  const [background, setBackground] = useState("");
  const [edit, setEdit] = useState(false);

  const renderBoardBg = () => {
    dispatch(fetchLabels());
    dispatch(fetchTaskLabels());
    if (background === "") {
      return findBg(workspace.background);
    } else {
      return findBg(background);
    }
  };
  const changeBackground = (bgOption) => {
    dispatch(updateBoardBackground(workspace, bgOption));
    setBackground(bgOption);
  };
  const handleClick = (e) => {
    if (e) {
      dispatch(starredBoard(workspace));
    }
  };
  const handleEditTitleClick = (e) => {
    if (e) return setEdit(!edit);
  };
  const bgOptions = bgs.filter((bg) => bg !== workspace.background);

  const findBg = (bgKey) => {
    switch (bgKey) {
      case "lake":
        return {
          backgroundImage: `url(${Lake})`,
        };
      case "mountians":
        return {
          backgroundImage: `url(${Mountians})`,
        };
      case "cityscape":
        return {
          backgroundImage: `url(${Cityscape})`,
        };
      case "beach":
        return {
          backgroundImage: `url(${Beach})`,
        };
      case "autumn":
        return {
          backgroundImage: `url(${Autumn})`,
        };
      case "waterfall":
        return {
          backgroundImage: `url(${Waterfall})`,
        };
      case "city":
        return {
          backgroundImage: `url(${City})`,
        };
      case "meadow":
        return {
          backgroundImage: `url(${Meadow})`,
        };
      case "iceland":
        return {
          backgroundImage: `url(${Iceland})`,
        };
      default:
        return;
    }
  };

  return (
    <>
      {workspace.id === undefined ? (
        <Redirect to="/home" />
      ) : (
        <>
          <NavBar />
          <div id="board" style={renderBoardBg()}>
            <div className="board-header-wrap">
              <div className="board-header">
                <div className="board-ops left">
                  <div className="board-ops title-top">
                    <div onClick={(e) => handleEditTitleClick(e)}>
                      {edit ? (
                        <EditBoardTitle />
                      ) : (
                        <span
                          className="b-name"
                          style={{
                            paddingLeft: "12px",
                            paddingRight: "12px",
                          }}
                        >
                          {workspace.title}
                        </span>
                      )}
                    </div>

                    <button
                      className="navbar-btn"
                      onClick={(e) => handleClick(e)}
                    >
                      {workspace.starred ? (
                        <span
                          style={{
                            fontSize: "17px",
                            fontWeight: "400",
                            color: "#f2d600",
                          }}
                        >
                          ☆
                        </span>
                      ) : (
                        <span style={{ fontSize: "17px", fontWeight: "400" }}>
                          ☆
                        </span>
                      )}
                    </button>
                  </div>
                </div>
                <div className="board-ops right">
                  <BoardMenu
                    workspace={workspace}
                    findBg={findBg}
                    bgOptions={bgOptions}
                    changeBackground={changeBackground}
                  />
                </div>
              </div>
            </div>
            <div className="board-body">
              <CardList key={workspace.id} workspace={workspace} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  workspace: state.workspaceReducer.workspace,
});
export default connect(mapStateToProps)(Board);
