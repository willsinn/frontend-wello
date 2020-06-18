import React, { useState } from "react";
import withAuth from "../hocs/withAuth";
import PersonalBoardList from "../components/PersonalBoardList";
import Archives from "./Archives";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { fetchUserBoards } from "../actions/boards";
import { Redirect } from "react-router-dom";

const HomePage = ({ user, workspace, dispatch }) => {
  const [boards, setBoards] = useState(true);
  const renderBoards = () => {
    dispatch(fetchUserBoards(user.id));
  };

  return (
    <div id="root">
      <NavBar />
      {workspace && workspace.id ? (
        <Redirect to="/board" />
      ) : (
        <div className="home-page">
          <div style={{ position: "absolute", top: "40px", left: "0px" }}>
            <div className="archive-boards-menu">
              <button onClick={(e) => setBoards(true)}>Boards</button>
              <button onClick={(e) => setBoards(false)}>Archives</button>
            </div>
          </div>

          {boards ? (
            <div className="boards-container">
              <h2>Starred</h2>
              {renderBoards()}
              <PersonalBoardList />
              <h2>Team Boards</h2>
            </div>
          ) : (
            <Archives />
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    workspace: state.workspaceReducer.workspace,
  };
};
export default withAuth(connect(mapStateToProps)(HomePage));
