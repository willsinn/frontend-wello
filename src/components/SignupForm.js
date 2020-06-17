import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const SignupForm = ({ loggedIn, dispatch }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleChange = (fieldType) => {
    return (event) => {
      this.setState({
        [fieldType]: event.target.value,
      });
    };
  };
  return (
    <>
      {loggedIn ? (
        <Redirect to="/home" />
      ) : (
        <div className="signup-page">
          <div>SIGNUP!</div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    loggedIn: state.userReducer.loggedIn,
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
