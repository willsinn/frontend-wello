import React from "react";
import { connect } from "react-redux";
import { deleteCard } from "../actions/workspace";

const CardItem = (props, { dispatch }) => {
  const handleClick = e => {
    if (e) {
      props.dispatch(deleteCard(props.card.id));
      props.handleDeleteCard(props.card);
    }
  };
  return (
    <div className="card-item">
      <button onClick={handleClick} className="card-delete-btn">
        -
      </button>
      <div className="card-content">{props.card.subject}</div>
    </div>
  );
};
export default connect()(CardItem);
