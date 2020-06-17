import React from "react";
import PersonalBoardList from "../components/PersonalBoardList";

const HomePage = props => {
  return (
    <div className="home-page">
      <h2>Starred</h2>
      <PersonalBoardList />
      <h2>Team Boards</h2>
    </div>
  );
};

export default HomePage;
