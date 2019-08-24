import React, { useState } from "react";
import EditingForm from "./EditingForm";
import { connect } from "react-redux";
import { deleteCard } from "../actions/workspace";

const CardItem = (props, { dispatch }) => {
  const [editing, setEditing] = useState(false);

  const handleDeleteCard = e => {
    if (e) {
      props.dispatch(deleteCard(props.card));
      props.handleDeleteCard(props.card);
    }
  };
  const renderItem = () => (
    <>
      <button onClick={handleDeleteCard} className="card-delete-btn">
        ✘
      </button>
      <div className="card-content" onClick={() => setEditing(true)}>
        {props.card.subject}
      </div>
    </>
  );
  const renderEditing = () => {
    return (
      <>
        <EditingForm value={props.card.subject} />
        <button onClick={() => setEditing(false)} className="exit-edit">
          {" "}
        </button>
      </>
    );
  };
  return (
    <div className="card-item">{!editing ? renderItem() : renderEditing()}</div>
  );
};
export default connect()(CardItem);
