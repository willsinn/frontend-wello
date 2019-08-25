import React, { useState } from "react";
import EditingForm from "./EditingForm";
import { connect } from "react-redux";
import { deleteCard } from "../actions/workspace";
import { updateCard } from "../actions/workspace";
import { setError } from "../actions/workspace";

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
  const handleSingleEditing = e => {
    if (e) {
    }
  };
  const renderItem = () => (
    <>
      <button onClick={handleDeleteCard} className="card-delete-btn">
        ✘
      </button>
      <div className="card-content" onClick={handleSingleEditing}>
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
const mapStateToProps = ({ workspaceReducer: workspace }) => ({
  workspace: workspace.workspace,
  error: workspace.error
});
export default connect(mapStateToProps)(CardItem);
