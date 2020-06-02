import React from "react";
import PersonalBoardList from "../components/PersonalBoardList";
import Archived from "./Archived";

const HomePage = (props) => {
  return (
    <div className="home-page">
      <div>
        <h2>Starred</h2>
        <PersonalBoardList />
        <h2>Team Boards</h2>
      </div>

      <div>
        <Archived />
      </div>
    </div>
  );
};

export default HomePage;
