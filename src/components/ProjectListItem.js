import React from "react";
import { connect } from "react-redux";
import { setPage } from "../actions/user";
import { incrementCounter } from "../actions/user";
import { fetchWorkspace } from "../actions/workspace";
import { clearWorkspace } from "../actions/workspace";

const ProjectListItem = (props, { dispatch }) => {
  const handleClick = e => {
    if (e) {
      props.dispatch(clearWorkspace());
      props.dispatch(fetchWorkspace(props.project));
      props.dispatch(incrementCounter());
      props.dispatch(setPage("board"));
    }
  };
  return (
    <div onClick={handleClick} className="project-list-item">
      {props.project.title}
    </div>
  );
};
export default connect()(ProjectListItem);
