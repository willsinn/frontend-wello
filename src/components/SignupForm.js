import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { userSignup, setError } from "../actions/user";

const SignupForm = ({ loggedIn, error, dispatch }) => {
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
      debugger;
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
        <div className="signup-page">
          <div>
            SIGNUP!{error}
            <form onSubmit={handleSubmit}>
              <input
                className="signup-input"
                type="email"
                label="email"
                placeholder="Email address"
                name="email"
                onChange={(e) => handleChange(e, "email")}
                value={email}
                required
              />
              <input
                className="signup-input"
                type="firstName"
                label="firstName"
                placeholder="First name"
                name="firstName"
                onChange={(e) => handleChange(e, "firstName")}
                value={firstName}
                required
              />
              <input
                className="signup-input"
                type="lastName"
                label="lastName"
                placeholder="Last name"
                name="lastName"
                onChange={(e) => handleChange(e, "lastName")}
                value={lastName}
                required
              />
              <input
                className="signup-input"
                type="password"
                label="password"
                placeholder="Password."
                name="password"
                onChange={(e) => handleChange(e, "password")}
                value={password}
                required
              />
              <input
                className="signup-input"
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
export default connect(mapStateToProps)(SignupForm);

// <div className="form-wrapper">
// <div className="form-box">
//   <span className="l-s h">Signup</span>
//   <form
//     onSubmit={this.handleSubmit}
//     size="mini"
//     key="mini"
//     loading={this.props.authenticatingUser}
//     error={this.props.failedLogin}
//   >
//     <Message
//       error
//       header={this.state.error ? this.state.error : null}
//     />
//     <div className="login-signup input-wrapper">
//       {signupFields.map((field) => {
//         return (
//           <input
//             type={field}
//             label={field}
//             placeholder={`Create ${caps(field)}`}
//             name={field}
//             onChange={this.handleChange(field)}
//             value={this.state[field]}
//             className="login-signup input s"
//           />
//         );
//       })}
//       <input
//         type={"password"}
//         label={"confirmPassword"}
//         placeholder="Confirm Password"
//         name={"confirmPassword"}
//         onChange={this.handleChange("confirmPassword")}
//         value={this.state["confirmPassword"]}
//         className="login-signup input"
//       />
//     </div>

//     <div className="login-signup btn-wrapper">
//       <button className="login-signup btn-back">
//         <Link to="/login">
//           <span type="img">←</span>
//         </Link>
//       </button>
//       <button className="login-signup btn" type="submit">
//         Signup
//       </button>
//     </div>
//   </form>
// </div>        </div>
