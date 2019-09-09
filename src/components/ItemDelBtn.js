import React from "react";
import { deleteWorkspaceItem } from "../actions/workspace";
import { connect } from "react-redux";

const ItemDelBtn = (props, { dispatch }) => {
  const handleClick = e => {
    if (e) {
      props.dispatch(deleteWorkspaceItem(props.item));
      props.closeDropdown(e);
    }
  };
  return (
    <button onClick={handleClick} className="list-action-btn">
      Delete Project List
    </button>
  );
};
export default connect()(ItemDelBtn);
