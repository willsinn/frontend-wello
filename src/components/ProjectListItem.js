import React from "react";
import { connect } from "react-redux";
import { fetchWorkspace } from "../actions/workspace";

const ProjectListItem = (props, { dispatch }) => {
  const handleClick = e => {
    props.dispatch(fetchWorkspace(props.project));
  };
  return (
    <div onClick={e => handleClick(e)} className="project-list-item">
      {props.project.title}
    </div>
  );
};
export default connect()(ProjectListItem);
