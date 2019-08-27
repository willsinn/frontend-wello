import React, { useState } from "react";
import CardBtns from "./CardBtns";
import EditingForm from "./EditingForm";
import { connect } from "react-redux";

const Card = (props, { dispatch }) => {
  const [subject, setSubject] = useState(props.card.subject);
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleSave = input => {
    setSubject(input);
    setEdit(!edit);
  };
  console.log(edit);
  return (
    <div className="card">
      {edit ? (
        <div className="edit">
          <EditingForm
            card={props.card}
            subject={subject}
            handleSave={handleSave}
          />
        </div>
      ) : (
        <div className="card">
          {props.card.subject}

          <CardBtns card={props.card} handleEdit={handleEdit} />
        </div>
      )}
    </div>
  );
};

export default connect()(Card);
