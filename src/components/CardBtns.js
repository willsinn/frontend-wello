import React from "react";
import { deleteCard } from "../actions/workspace";
import { connect } from "react-redux";

const CardBtns = (props, { dispatch }) => {
  const handleDelete = e => {
    if (e) {
      props.dispatch(deleteCard(props.card));
    }
  };
  const editClick = e => {
    if (e) {
      props.handleEdit(e);
    }
  };

  return (
    <div className="card-btns">
      <button className="card-edit-btn" onClick={editClick}>
        edit
      </button>
      <button className="card-del-btn" onClick={handleDelete}>
        del
      </button>
    </div>
  );
};

export default connect()(CardBtns);
