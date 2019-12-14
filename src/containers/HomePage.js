import React from "react";
import BoardsTiled from "../components/BoardsTiled";

const HomePage = props => {
  return (
    <div onClick id="userprojects" className="container">
      <BoardsTiled />
    </div>
  );
};

export default HomePage;
