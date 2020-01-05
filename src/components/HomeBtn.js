import React from "react";
import { connect } from "react-redux";
import { setPage } from "../actions/user";

const HomeBtn = (props, { dispatch }) => (
  <button className="navbar-btn" onClick={e => props.dispatch(setPage("home"))}>
    <img
      className="icon"
      src={require("../images/home-icon.png")}
      alt="home"
      opacity="1"
    />
  </button>
);
export default connect()(HomeBtn);
