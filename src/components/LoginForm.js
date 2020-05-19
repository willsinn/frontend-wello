import React, { useState } from "react";
import { connect } from "react-redux";
import { userLogin } from "../actions/user";

const LoginForm = ({ dispatch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetState = () => {
    setEmail("");
    setPassword("");
  };
  const handleEmailChange = (e) => {
    e.persist();
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    e.persist();
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(userLogin({ email, password }));
      resetState();
    }
  };

  return (
    <div className="card-item-wrap">
      <div className="card-item">
        <form>
          <input
            className="add-card-input"
            type="text"
            name="email"
            onChange={handleEmailChange}
            value={email}
            placeholder="Enter email"
          />
          <input
            className="add-card-input"
            type="password"
            name="password"
            onChange={handlePasswordChange}
            value={password}
            placeholder="Create password"
          />
          <button onClick={handleSubmit} className="add-list-btn" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default connect()(LoginForm);
