import React from "react";
import { connect } from "react-redux";
import { fetchWorkspace } from "../actions/workspace";
import { incrementCounter } from "../actions/user";

const ProjectListItem = (props, { dispatch }) => {
  const handleClick = e => {
    if (e) {
      props.dispatch(fetchWorkspace(props.project));
      props.dispatch(incrementCounter());
    }
  };
  return (
    <div onClick={handleClick} className="project-list-item">
      {props.project.title}
    </div>
  );
};
export default connect()(ProjectListItem);
