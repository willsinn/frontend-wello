import React, { useState } from "react";
import CardList from "../components/CardList";
import BoardMenu from "./BoardMenu";
import NavBar from "./NavBar";
import EditBoardTitle from "../components/EditBoardTitle";
import DragAndDrop from "./DragAndDrop";

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
import { newUserLabel } from "../actions/labels";
import { starredBoard } from "../actions/workspace";
import { updateBoardBackground } from "../actions/boards";
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
const defaultLabels = ["green", "yellow", "orange", "red", "purple", "blue"];

const Board = ({ workspace, labels, user, activePage, dispatch }) => {
  const [background, setBackground] = useState("");
  const [edit, setEdit] = useState(false);

  const renderBoardBg = () => {
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

  const bgOptions = bgs.filter((bg) => bg !== workspace.background);
  const handleCloseEdit = (e) => {
    setEdit(false);
  };
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
  const updateDefaultLabels = () => {
    if (labels && labels.length === 0)
      defaultLabels.forEach((labelColor) =>
        dispatch(newUserLabel({ userId: user.id, color: labelColor }))
      );
  };
  return (
    <>
      <NavBar />
      {updateDefaultLabels()}
      {!user ? (
        <Redirect to="/" />
      ) : (
        <div id="board" style={renderBoardBg()}>
          <div className="board-header">
            <div className="board-ops left">
              <div className="board-ops title-top">
                <div
                  className="board-title-cont"
                  onClick={(e) => setEdit(true)}
                >
                  {edit ? (
                    <span>
                      <EditBoardTitle
                        workspace={workspace}
                        handleCloseEdit={handleCloseEdit}
                      />
                    </span>
                  ) : (
                    <span>{workspace.title}</span>
                  )}
                </div>

                <button
                  className="navbar-btn"
                  onClick={(e) => handleClick(e)}
                  style={{ marginLeft: "4px" }}
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
          <div className="board-body">
            <CardList key={workspace.id} workspace={workspace} />
            {/* <DragAndDrop
              key={workspace.id}
              workspace={workspace}
              cards={workspace.cards}
            /> */}
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  workspace: state.workspaceReducer.workspace,
  labels: state.labelsReducer.labels,
  user: state.userReducer.user,
  activePage: state.userReducer.activePage,
});
export default connect(mapStateToProps)(Board);
