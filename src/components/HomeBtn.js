import React from "react";
import { connect } from "react-redux";
import { clearWorkspace } from "../actions/workspace";

const HomeBtn = (props, { dispatch }) => (
  <button
    className="navbar-btn"
    onClick={e => props.dispatch(clearWorkspace(e))}
  >
    Home
  </button>
);
export default connect()(HomeBtn);
