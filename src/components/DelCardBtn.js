import React from "react";
import { deleteCard } from "../actions/workspace";
import { connect } from "react-redux";

const DelCardBtn = (props, { dispatch }) => {
  const handleDelete = e => {
    if (e) {
      props.dispatch(deleteCard(props.card));
    }
  };
  return (
    <button className="card-del-btn" onClick={handleDelete}>
      del
    </button>
  );
};

export default connect()(DelCardBtn);
