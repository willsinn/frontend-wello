import React from "react";
import NewProjectForm from "./NewProjectForm";
import SidebarList from "../components/SidebarList";
import { connect } from "react-redux";
import { clearWorkspace } from "../actions/workspace";
import { setTrue, setFalse } from "../actions/user";

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
          onClick={e => props.dispatch(setTrue(e))}
        >
          Projects
        </button>
        <button
          className="navbar-btn"
          onClick={e => props.dispatch(setFalse(e))}
        >
          New Project
        </button>
      </div>
      {notActive()}
    </div>
  );
};
const mapStateToProps = ({ userReducer: isActive }) => ({
  isActive: isActive.isActive
});

export default connect(mapStateToProps)(NavBar);
