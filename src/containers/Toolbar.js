import React, { useState } from "react";
import CreateProjectForm from "./CreateProjectForm";
import LeftSidebarProjectsList from "../components/LeftSidebarProjectsList";

const Toolbar = props => {
  const [projects, setShowing] = useState(false);
  const [projectForm, setOpen] = useState(false);

  return (
    <>
      <div className="top-toolbar">
        <button className="toolbar-btn" onClick={() => setShowing(!projects)}>
          {" "}
          Projects
        </button>
        <button className="toolbar-btn" onClick={() => setOpen(!projectForm)}>
          {" "}
          New Project{" "}
        </button>
      </div>

      <div className="tool wrapper">
        <div className="project-list wrapper">
          {projects ? <LeftSidebarProjectsList /> : null}
        </div>
        <div className="form wrapper">
          {" "}
          {projectForm ? <CreateProjectForm name={props.name} /> : null}
        </div>
      </div>
    </>
  );
};

export default Toolbar;
