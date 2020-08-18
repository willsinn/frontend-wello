import React, { useState } from "react";
import LandingPage from "../components/LandingPage";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { userSignup } from "../actions/user";

const SignForm = ({ loggedIn, error, dispatch }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const resetState = () => {
    setEmail("");
    setName("");
    setPassword("");
  };
  const handleEmailChange = (e) => {
    e.persist();
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    e.persist();
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    e.persist();
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(userSignup({ email, name, password }));
      resetState();
    }
  };
  return (
    <>
      <LandingPage />
      {loggedIn ? <Redirect to="/home" /> : null}
      <div className="signin-modal-wrap">
        <div className="center">
          <div className="signin-modal">
            <h1 className="signin-modal-title">Sign up for an account</h1>
            {error ? <div className="error-message">{error}</div> : null}
            <form className="signin-form" onSubmit={handleSubmit}>
              <input
                className="signin-input"
                type="text"
                name="email"
                onChange={handleEmailChange}
                value={email}
                placeholder="Enter email"
                required
              />
              <input
                className="signin-input"
                type="text"
                name="username"
                onChange={handleNameChange}
                value={name}
                placeholder="Enter full name"
                required
              />
              <input
                className="signin-input"
                type="password"
                name="password"
                onChange={handlePasswordChange}
                value={password}
                placeholder="Create password"
                required
              />
              <button className="signin-btn add-list-btn" type="submit">
                Sign Up
              </button>
            </form>
            <hr />
            <Link to="/login" className="signup-link">
              Already have an account? Log In
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
export default connect(mapStateToProps)(SignForm);
