import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setUser } from "../actions/user.js";
import UserContainer from "./UserContainer";

const userUrl = "http://localhost:3000/user/1";

const UserProjectsContainer = props => {
  const currentUser = props.user;
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
        props.setUser({ payload: userData });
      });
  }, []);
  return (
    <div className="user-projects full-page container">
      <UserContainer name={currentUser.name} />
    </div>
  );
};
const mapStateToProps = ({ userReducer: user }) => ({
  user: user.user
});
export default connect(
  mapStateToProps,
  { setUser }
)(UserProjectsContainer);
