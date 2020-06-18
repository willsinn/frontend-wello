import React, { useState } from "react";
import LandingPage from "./LandingPage";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { userSignup } from "../actions/user";
//saved
const SignUpForm = ({ loggedIn, error, dispatch }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(true);

  const handleChange = (e, fieldType) => {
    if (e) {
      switch (fieldType) {
        case "email":
          return setEmail(e.target.value);
        case "name":
          return setName(e.target.value);
        case "password":
          return setPassword(e.target.value);
        default:
          return;
      }
    }
  };
  const handleSubmitSignup = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(userSignup({ email, password, name }));
    }
  };
  console.log(loggedIn);

  return (
    <>
      {loggedIn ? (
        <Redirect to="/home" />
      ) : (
        <>
          <LandingPage />
          {signup ? (
            <div className="signin-modal-wrap">
              <div className="center">
                <div className="signin-modal signup">
                  <h1 className="signin-modal-title">
                    Sign up for your account
                  </h1>
                  <div>{error}</div>
                  <form onSubmit={handleSubmitSignup} className="signin-form">
                    <input
                      className="signin-input"
                      type="email"
                      label="email"
                      placeholder="Enter email address"
                      name="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={email}
                      required
                    />
                    <input
                      className="signin-input"
                      type="name"
                      label="name"
                      placeholder="Enter full Name"
                      name="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={name}
                      required
                    />
                    <input
                      className="signin-input"
                      type="password"
                      label="password"
                      placeholder="Create password"
                      name="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={password}
                      required
                    />
                    <button
                      className="signin-btn checklist-btn add-list-btn"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </form>
                  <hr />
                  <a
                    href="login"
                    onClick={(e) => setSignup(!signup)}
                    className="signup-link"
                  >
                    Already have an account? Log in
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <Redirect to="/login" />
          )}
        </>
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
export default connect(mapStateToProps)(SignUpForm);
