import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { archiveBoard } from "../actions/boards";
import { clearWorkspace } from "../actions/workspace";
import { setPage } from "../actions/user";
import { getCurrentDate } from "../utils";

const ArchiveBoardBtn = ({ board, activePage, dispatch }) => {
  const handleClick = (e) => {
    if (e) {
      dispatch(archiveBoard({ board, date_archived: getCurrentDate() }));
      dispatch(setPage("boards"));
      dispatch(clearWorkspace());
    }
  };
  return (
    <>
      {activePage === "board" ? (
        <ul className="board-menu-nav-list">
          <li onClick={(e) => handleClick(e)} className="board-menu-nav-item">
            <span style={{ display: "flex" }} className="board-menu-nav-btn">
              <div className="archive-icon-black" />
              <span>Archive board</span>
            </span>
          </li>
        </ul>
      ) : (
        <Redirect to="/home" />
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    activePage: state.userReducer.activePage,
  };
};
export default connect(mapStateToProps)(ArchiveBoardBtn);
