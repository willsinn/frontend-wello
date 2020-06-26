import React, { useState } from "react";
import { connect } from "react-redux";
import { changeUserAttrs } from "../actions/user";

const SettingsPage = ({ user, dispatch }) => {
  const [chgName, setChgName] = useState(user.name);
  const [chgEmail, setChgEmail] = useState(user.email);

  const handleChange = (e, actionType) => {
    if (actionType === "name") {
      setChgName(e.target.value);
    }
    if (actionType === "email") {
      setChgEmail(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    if (e) {
      dispatch(
        changeUserAttrs({ id: user.id, name: chgName, email: chgEmail })
      );
    }
  };
  return (
    <div className="settings-page">
      <form className="settings-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className="signin-input"
          type="text"
          name="name"
          onChange={(e) => handleChange(e, "name")}
          value={chgName}
          required
        />
        <label>Email</label>
        <input
          className="signin-input"
          type="text"
          name="email"
          onChange={(e) => handleChange(e, "email")}
          value={chgEmail}
          required
        />
        <hr />
        <button
          className="settings-btn signin-btn checklist-btn add-list-btn"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};
export default connect(mapStateToProps)(SettingsPage);
