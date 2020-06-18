import React, { useState } from "react";
import LandingPage from "./LandingPage";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { userSignup, setError } from "../actions/user";
//saved
const SignUpForm = ({ loggedIn, error, dispatch }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleChange = (e, fieldType) => {
    if (e) {
      switch (fieldType) {
        case "email":
          return setEmail(e.target.value);
        case "firstName":
          return setFirstName(e.target.value);
        case "lastName":
          return setLastName(e.target.value);
        case "password":
          return setPassword(e.target.value);
        case "passwordConfirm":
          return setPasswordConfirm(e.target.value);
        default:
          return;
      }
    }
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      if (password === passwordConfirm) {
        const name = `${firstName}%%${lastName}`;
        dispatch(userSignup({ email, password, name }));
      } else {
        dispatch(setError("Passwords do not match"));
      }
    }
  };
  //   console.log(email);
  //   console.log(firstName);
  return (
    <>
      {loggedIn ? (
        <Redirect to="/home" />
      ) : (
        <div className="landing">
          <LandingPage />

          <div>SIGNUP!{error}</div>
          <form className="signin-form" onSubmit={handleSubmit}>
            <input
              className="signin-input"
              type="email"
              label="email"
              placeholder="Email address"
              name="email"
              onChange={(e) => handleChange(e, "email")}
              value={email}
              required
            />
            <input
              className="signin-input"
              type="firstName"
              label="firstName"
              placeholder="First name"
              name="firstName"
              onChange={(e) => handleChange(e, "firstName")}
              value={firstName}
              required
            />
            <input
              className="signin-input"
              type="lastName"
              label="lastName"
              placeholder="Last name"
              name="lastName"
              onChange={(e) => handleChange(e, "lastName")}
              value={lastName}
              required
            />
            <input
              className="signin-input"
              type="password"
              label="password"
              placeholder="Password."
              name="password"
              onChange={(e) => handleChange(e, "password")}
              value={password}
              required
            />
            <input
              className="signin-input"
              type="password"
              label="passwordConfirm"
              placeholder="Confirm password"
              name="passwordConfirm"
              onChange={(e) => handleChange(e, "passwordConfirm")}
              value={passwordConfirm}
              required
            />
            <button type="submit">Signup</button>
          </form>
        </div>
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
