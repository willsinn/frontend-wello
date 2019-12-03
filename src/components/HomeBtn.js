import React from "react";
import { connect } from "react-redux";
import { clearWorkspace } from "../actions/workspace";

const HomeBtn = (props, { dispatch }) => (
  <a
    className="navbar-btn home"
    onClick={e => props.dispatch(clearWorkspace(e))}
  >
    <img
      className="home-icon"
      src={require("../images/home-icon.png")}
      alt="home"
      backgroundColor="inherit"
      opacity="1"
    />
  </a>
);
export default connect()(HomeBtn);
