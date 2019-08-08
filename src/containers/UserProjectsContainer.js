import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setUser } from "../actions/user.js";
import UserContainer from "./UserContainer";

const USER_URL = "http://localhost:3000/user/1";

const UserProjectsContainer = props => {
  useEffect(() => {
    fetch(USER_URL, {
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
  return (
    <div>
      Projects
      <UserContainer />
    </div>
  );
};

export default connect(
  null,
  { setUser }
)(UserProjectsContainer);
