import React from "react";
import { connect } from "react-redux";

const HomeBtn = () => {
  return (
    <a href="/home" className="navbar-btn">
      <img
        className="icon"
        src={require("../images/home-icon.png")}
        alt="home"
        opacity="1"
      />
    </a>
  );
};
export default connect()(HomeBtn);
