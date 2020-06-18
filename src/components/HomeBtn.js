import React from "react";
import { connect } from "react-redux";
import { clearWorkspace } from "../actions/workspace";

const HomeBtn = ({ dispatch }) => {
  return (
    <button className="navbar-btn" onClick={(e) => dispatch(clearWorkspace())}>
      <img
        className="icon"
        src={require("../images/home-icon.png")}
        alt="home"
        opacity="1"
      />
    </button>
  );
};
export default connect()(HomeBtn);
