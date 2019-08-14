import React, { useState } from "react";
import CreateProjectForm from "./CreateProjectForm";
import LeftSidebarProjectsList from "../components/LeftSidebarProjectsList";

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

      {projects ? <LeftSidebarProjectsList /> : null}
      {projectForm ? <CreateProjectForm name={props.name} /> : null}
    </div>
  );
};

export default NavBar;
