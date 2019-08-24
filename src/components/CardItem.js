import React, { useState } from "react";
import EditingForm from "./EditingForm";
import { connect } from "react-redux";
import { deleteCard } from "../actions/workspace";

const CardItem = (props, { dispatch }) => {
  const [edit, setEdit] = useState(false);
  const handleDeleteCard = e => {
    if (e) {
      props.dispatch(deleteCard(props.card));
      props.handleDeleteCard(props.card);
    }
  };
  return (
    <div className="card-item">
      <button onClick={handleDeleteCard} className="card-delete-btn">
        ✘
      </button>
      <div className="card-content">{props.card.subject}</div>
    </div>
  );
};
export default connect()(CardItem);
