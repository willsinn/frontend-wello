import React from "react";
import BoardsTiled from "../components/BoardsTiled";
import { connect } from "react-redux";
import { setNull } from "../actions/user";

const HomePage = ({ dispatch }) => {
  return (
    <div
      onClick={e => dispatch(setNull())}
      id="userprojects"
      className="container"
    >
      <BoardsTiled />
    </div>
  );
};

export default connect()(HomePage);
