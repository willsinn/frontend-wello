import React, { useState } from "react";

const SignupForm = () => {
  const handleChange = (fieldType) => {
    return (event) => {
      this.setState({
        [fieldType]: event.target.value,
      });
    };
  };
  return (
    <div className="signup-page">
      <div>SIGNUP!</div>
    </div>
  );
};
export default SignupForm;

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
