import React from "react";
import withAuth from "../hocs/withAuth";
import PersonalBoardList from "../components/PersonalBoardList";
import NavBar from "./NavBar";

const HomePage = (props) => {
  return (
    <div id="root">
      <NavBar />
      <div className="home-page">
        <h2>Starred</h2>
        <PersonalBoardList />
        <h2>Team Boards</h2>
      </div>
    </div>
  );
};

export default withAuth(HomePage);
