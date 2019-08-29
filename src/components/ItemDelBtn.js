import React from "react";
import { deleteWorkspaceItem } from "../actions/workspace";
import { connect } from "react-redux";

const ItemDelBtn = (props, { dispatch }) => {
  const handleClick = e => {
    if (e) {
      props.dispatch(deleteWorkspaceItem(props.item));
    }
  };
  return (
    <button onClick={handleClick} className="delete-item-btn">
      DELETE
    </button>
  );
};
export default connect()(ItemDelBtn);
