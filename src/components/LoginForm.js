import React, { useState } from "react";
import { connect } from "react-redux";
import { userLogin } from "../actions/user";

const LoginForm = ({ error, authenticatingUser, dispatch }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUnChange = (e) => {
    e.persist();
    setUsername(e.target.value);
  };
  const handlePwChange = (e) => {
    e.persist();
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(userLogin(username, password));
      //   setTitle("Checklist");
      //   closePopup();
    }
  };
  console.log(error, authenticatingUser);

  return (
    <div>
      Hi this is the Wello Login Form!!!
      <div>{error}</div>
      <form onSubmit={handleSubmit}>
        <input
          className="add-checklist-input"
          type="text"
          name="username"
          onChange={handleUnChange}
          value={username}
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
  );
};
const mapStateToProps = (state) => {
  return {
    error: state.userReducer.error,
    authenticatingUser: state.userReducer.authenticatingUser,
  };
};
export default connect(mapStateToProps)(LoginForm);
