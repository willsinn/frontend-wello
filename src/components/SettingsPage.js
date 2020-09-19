import React, { useState } from "react";
import { connect } from "react-redux";
import { changeUserAttrs, setPage } from "../actions/user";

const SettingsPage = ({ user, dispatch }) => {
  const [chgName, setChgName] = useState(user.name);
  const [chgEmail, setChgEmail] = useState(user.email);
  const nameSplit = user.name.split(" ");
  const renderInitials = () => {
    let initials = "";
    const nameSplit = user.name.split(" ");
    if (nameSplit) {
      nameSplit.forEach((letter) => {
        const first = letter[0].toUpperCase();
        initials += first;
      });
    }
    if (initials.length === 1) {
      initials += initials;
    }
    if (initials.length > 2) {
      const limit = initials.slice(0, 1);
      initials = limit;
    }
    return initials;
  };

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
      dispatch(setPage("settings"));
    }
  };
  return (
    <div className="settings-page">
      <div className="profile-nicknames">
        <span className="user-initials">{renderInitials()}</span>
        <span className="user-fullname">{user.name}</span>
        <span className="user-handle">@{nameSplit[0]}1</span>
      </div>
      <form className="settings-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
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
    activePage: state.userReducer.activePage,
  };
};
export default connect(mapStateToProps)(SettingsPage);
