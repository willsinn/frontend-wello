import React from "react";
import { connect } from "react-redux";
import { clearWorkspace } from "../actions/workspace";

const HomeBtn = ({ dispatch }) => {
  const handleClick = (e) => {
    if (e) {
      dispatch(clearWorkspace());
    }
  };
  return (
    <button className="navbar-btn" onClick={(e) => handleClick(e)}>
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
