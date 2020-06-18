import React, { useState } from "react";
import LandingPage from "./LandingPage";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { userSignup, setError } from "../actions/user";
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
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(userSignup({ email, password, name }));
    }
  };
  //   console.log(email);
  //   console.log(firstName);
  return (
    <>
      <LandingPage />
      {signup ? (
        <div className="modal-wrap">
          <div className="center">
            <div className="signin-modal">
              <h1 className="signin-modal-title">Sign up for your account</h1>
              <div>{error}</div>
              <form className="signin-form" onSubmit={handleSubmit}>
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
                <p className="terms-policy">
                  By signing up, you confirm that you've read and accepted our
                  Terms of Service and Privacy Policy.
                </p>

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
  );
};
const mapStateToProps = (state) => {
  return {
    loggedIn: state.userReducer.loggedIn,
    error: state.userReducer.error,
  };
};
export default connect(mapStateToProps)(SignUpForm);
