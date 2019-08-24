import React, { useState } from "react";
import EditingForm from "./EditingForm";
import { connect } from "react-redux";
import { deleteCard } from "../actions/workspace";
import { updateCard } from "../actions/workspace";

const CardItem = (props, { dispatch }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(props.card.subject);
  const handleDeleteCard = e => {
    if (e) {
      props.dispatch(deleteCard(props.card));
      props.handleDeleteCard(props.card);
    }
  };
  const handleSave = input => {
    props.dispatch(
      updateCard({
        id: props.card.id,
        key: "subject",
        value: input
      }),
      setValue(input),
      setEditing(false)
    );
  };
  const renderItem = () => (
    <>
      <button onClick={handleDeleteCard} className="card-delete-btn">
        ✘
      </button>
      <div className="card-content" onClick={() => setEditing(true)}>
        {value}
      </div>
    </>
  );
  const renderEditing = () => {
    return (
      <>
        <EditingForm value={value} handleSave={handleSave} />
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
