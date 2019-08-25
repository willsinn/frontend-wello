import React, { useState } from "react";
import EditingForm from "./EditingForm";
import { connect } from "react-redux";
import { deleteCard } from "../actions/workspace";
import { updateCard } from "../actions/workspace";
import { setError } from "../actions/workspace";

const CardItem = (props, { dispatch }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(props.card.subject);
  const [menu, setMenu] = useState(false);
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
  const renderMenu = () => (
    <div className="card-content">
      <button onClick={() => setEditing(true)}>X</button>
      {value}
      <button onClick={() => setEditing(true)}>Edit</button>
    </div>
  );
  const renderEditing = () => {
    return (
      <>
        <button onClick={() => setEditing(false)} className="exit-edit">
          {" "}
        </button>
        <EditingForm value={value} handleSave={handleSave} />
      </>
    );
  };
  return (
    <div className="card-item">
      <div className="card-del-wrap ">
        <button onClick={() => setMenu(true)} className="card-delete-btn">
          <span className="c-d-t">...</span>
        </button>
      </div>
      <div>{menu ? renderMenu() : value}</div>
    </div>
  );
};
const mapStateToProps = ({ workspaceReducer: workspace }) => ({
  workspace: workspace.workspace,
  error: workspace.error
});
export default connect(mapStateToProps)(CardItem);
