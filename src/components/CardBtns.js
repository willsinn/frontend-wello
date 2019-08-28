import React from "react";
import { deleteCard } from "../actions/workspace";
import { toggleEdit } from "../actions/workspace";
import { connect } from "react-redux";

const CardBtns = (props, { dispatch }) => {
  const handleDelete = e => {
    if (e) {
      props.dispatch(deleteCard(props.card));
      props.dispatch(toggleEdit());
    }
  };
  const editClick = e => {
    if (e) {
      props.handleEdit(e);
    }
  };

  return (
    <div className="card-btns">
      <button onClick={handleDelete}>del</button>
      <button onClick={editClick}>edit</button>
    </div>
  );
};

export default connect()(CardBtns);
