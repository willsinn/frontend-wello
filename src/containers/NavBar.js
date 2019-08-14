import React, { useState } from "react";
import AddProjectForm from "./AddProjectForm";
import SidebarList from "../components/SidebarList";
import { connect } from "react-redux";
import { clearWorkspace } from "../actions/workspace";

const NavBar = (props, { dispatch }) => {
  const [projects, setShowing] = useState(false);
  const [projectForm, setOpen] = useState(false);
  const handleHomeClick = e => {
    props.dispatch(clearWorkspace());
  };
  return (
    <div id="navbar">
      <div className="top-navbar">
        <button className="navbar-btn" onClick={() => setShowing(!projects)}>
          Projects
        </button>
        <button className="navbar-btn" onClick={e => handleHomeClick(e)}>
          Home
        </button>
        <button className="navbar-btn" onClick={() => setOpen(!projectForm)}>
          New Project
        </button>
      </div>

      {projects ? <SidebarList /> : null}
      {projectForm ? <AddProjectForm name={props.name} /> : null}
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    clearWorkspace: e => dispatch({ type: "CLEAR_WORKSPACE" })
  };
};
export default connect()(NavBar);
