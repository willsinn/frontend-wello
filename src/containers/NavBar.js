import React, { useState } from "react";
import AddProjectForm from "./AddProjectForm";
import SidebarList from "../components/SidebarList";

const NavBar = props => {
  const [projects, setShowing] = useState(false);
  const [projectForm, setOpen] = useState(false);

  return (
    <div id="navbar">
      <div className="top-navbar">
        <button className="navbar-btn" onClick={() => setShowing(!projects)}>
          {" "}
          Projects
        </button>
        <button className="navbar-btn" onClick={() => setOpen(!projectForm)}>
          {" "}
          New Project{" "}
        </button>
      </div>

      {projects ? <SidebarList /> : null}
      {projectForm ? <AddProjectForm name={props.name} /> : null}
    </div>
  );
};

export default NavBar;
