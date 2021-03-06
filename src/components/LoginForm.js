import React, { useState } from "react";
import LandingPage from "./LandingPage";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLogin, setError } from "../actions/user";

const LoginForm = ({ loggedIn, error, dispatch }) => {
  const [email, setEmail] = useState("DEMO_ME@email.com");
  const [password, setPassword] = useState("password");
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
      <LandingPage />
      {loggedIn ? <Redirect to="/home" /> : null}
      <div className="signin-modal-wrap">
        <div className="center">
          <div className="signin-modal">
            <h1 className="signin-modal-title">Log in to Wello</h1>
            {error ? <div className="error-message">{error}</div> : null}
            <form className="signin-form" onSubmit={handleSubmit}>
              <input
                className="signin-input"
                type="text"
                name="email"
                onChange={handleUnChange}
                placeholder="Enter email"
                value={email}
                required
              />
              <input
                className="signin-input"
                type="password"
                name="password"
                onChange={handlePwChange}
                placeholder="Enter password"
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
            <Link
              to="/signup"
              className="signup-link"
              onClick={() => dispatch(setError(null))}
            >
              Signup for an account
            </Link>
          </div>
        </div>
      </div>
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
