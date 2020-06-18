import React from "react";
import withAuth from "../hocs/withAuth";
import PersonalBoardList from "../components/PersonalBoardList";

import NavBar from "./NavBar";
import { connect } from "react-redux";
import { fetchUserBoards } from "../actions/boards";
import { Redirect } from "react-router-dom";

const HomePage = ({ user, workspace, dispatch }) => {
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
          <h2>Starred</h2>
          {renderBoards()}
          <PersonalBoardList />
          <h2>Team Boards</h2>
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
