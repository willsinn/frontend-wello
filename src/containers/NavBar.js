import React from "react";
import NewProjectForm from "./NewProjectForm";
import SidebarList from "../components/SidebarList";
import { connect } from "react-redux";
import { setTrue, setFalse, setNull } from "../actions/user";

const NavBar = (props, { dispatch }) => {
  const notActive = () => {
    if (props.isActive === null) {
      return null;
    } else {
      return props.isActive ? <SidebarList /> : <NewProjectForm />;
    }
  };
  return (
    <div id="navbar">
      <div className="top-navbar">
        <button
          className="navbar-btn"
          onClick={
            props.isActive
              ? e => props.dispatch(setNull(e))
              : e => props.dispatch(setTrue(e))
          }
        >
          Projects
        </button>
        <button
          className="navbar-btn"
          onClick={
            props.isActive === false
              ? e => props.dispatch(setNull(e))
              : e => props.dispatch(setFalse(e))
          }
        >
          New Project
        </button>
        <h1>Wello</h1>
      </div>
      {notActive()}
    </div>
  );
};
const mapStateToProps = ({ userReducer: isActive }) => ({
  isActive: isActive.isActive
});

export default connect(mapStateToProps)(NavBar);
