import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setUser } from "../actions/index.js";

const userUrl = "http://localhost:3000/user/1";

const UserProjectsContainer = props => {
  useEffect(() => {
    fetch(userUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(r => r.json())
      .then(userData => {
        console.log(userData);
        props.setUser({ payload: userData });
      });
  }, []);
  return <div>Projects,</div>;
};
const mapStateToProps = ({ userReducer: user }) => ({
  user: user.user
});
export default connect(
  mapStateToProps,
  { setUser }
)(UserProjectsContainer);
