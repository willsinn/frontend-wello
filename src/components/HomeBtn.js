import React from "react";
import { connect } from "react-redux";
import { setPage } from "../actions/user";

const HomeBtn = (props, { dispatch }) => (
  <a className="navbar-btn home" onClick={e => props.dispatch(setPage("home"))}>
    <img
      className="home-icon"
      src={require("../images/home-icon.png")}
      alt="home"
      opacity="1"
    />
  </a>
);
export default connect()(HomeBtn);
