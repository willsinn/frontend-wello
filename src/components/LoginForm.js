import React, { useState } from "react";
import LandingPage from "./LandingPage";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { userLogin } from "../actions/user";

const LoginForm = ({ loggedIn, error, dispatch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUnChange = (e) => {
    e.persist();
    setEmail(e.target.value);
  };
  const handlePwChange = (e) => {
    e.persist();
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(userLogin(email, password));
    }
  };

  return (
    <>
      {loggedIn ? (
        <Redirect to="/home" />
      ) : (
        <div className="landing">
          <LandingPage />
          Hi this is the Wello Login Form!!!
          <div className="signin-modal">
            <div>{error}</div>
            <form onSubmit={handleSubmit}>
              <input
                className="add-checklist-input"
                type="text"
                name="email"
                onChange={handleUnChange}
                value={email}
                required
              />
              <input
                className="add-checklist-input"
                type="text"
                name="password"
                onChange={handlePwChange}
                value={password}
                required
              />
              <button className="checklist-btn add-list-btn" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    error: state.userReducer.error,
    loggedIn: state.userReducer.loggedIn,
  };
};
export default connect(mapStateToProps)(LoginForm);
