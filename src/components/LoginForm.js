import React, { useState } from "react";
import LandingPage from "./LandingPage";
import { Redirect, Link } from "react-router-dom";
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
            <h1 className="signin-modal-title">Log in to Wello</h1>
            <div>{error}</div>
            <form className="signin-form" onSubmit={handleSubmit}>
              <input
                className="signin-input"
                type="text"
                name="email"
                onChange={handleUnChange}
                placeholder="  Enter email"
                value={email}
                required
              />
              <input
                className="signin-input"
                type="text"
                name="password"
                onChange={handlePwChange}
                placeholder="  Enter password"
                value={password}
                required
              />
              <button
                className="signin-btn checklist-btn add-list-btn"
                type="submit"
              >
                Login
              </button>
            </form>
            <hr />
            <div className="link-wrap">
              <Link to="/signup">Sign up for an account</Link>
            </div>
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
