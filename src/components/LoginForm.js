import React, { useState } from "react";
import { connect } from "react-redux";
import { userLogin } from "../actions/user";

const LoginForm = ({}) => {
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
      debugger;
      e.preventDefault();
      //   dispatch(postNewChecklist(task, title));
      //   setTitle("Checklist");
      //   closePopup();
    }
  };
  console.log(username, password);

  return (
    <div>
      Hi this is the login form
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

export default connect()(LoginForm);
