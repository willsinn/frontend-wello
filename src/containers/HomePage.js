import React from "react";
import withAuth from "../hocs/withAuth";
import PersonalBoardList from "../components/PersonalBoardList";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { fetchUserBoards } from "../actions/boards";

const HomePage = ({ user, dispatch }) => {
  const renderBoards = () => {
    dispatch(fetchUserBoards(user.id));
  };
  return (
    <div id="root">
      <NavBar />
      <div className="home-page">
        <h2>Starred</h2>
        {renderBoards()}
        <PersonalBoardList />
        <h2>Team Boards</h2>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};
export default withAuth(connect(mapStateToProps)(HomePage));
