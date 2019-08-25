import React, { useState } from "react";
import EditingForm from "./EditingForm";
import { connect } from "react-redux";
import { deleteCard } from "../actions/workspace";
import { updateCard } from "../actions/workspace";
import { setEditCard } from "../actions/workspace";
import { clearEditCard } from "../actions/workspace";

const CardItem = (props, { dispatch }) => {
  const [edit, setEdit] = useState();
  const [value, setValue] = useState(props.card.subject);
  const [menu, setMenu] = useState(false);
  const handleDeleteCard = e => {
    if (e) {
      props.dispatch(deleteCard(props.card));
      props.handleDeleteCard(props.card);
    }
  };
  const handleEdit = e => {
    if (e) {
      props.dispatch(setEditCard({ card: props.card }));
      setMenu(!menu);
    }
  };
  const clearEdit = e => {
    if (e) {
      props.dispatch(clearEdit());
      setMenu(!menu);
    }
  };
  const handleSave = input => {
    props.dispatch(
      updateCard({
        id: props.card.id,
        key: "subject",
        value: input
      }),
      clearEditCard(),
      setValue(input)
    );
  };
  const renderMenu = () => (
    <div className="card-content">
      {value}
      <button onClick={handleDeleteCard}>X</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
  const renderEditing = () => {
    return (
      <>
        <button onClick={clearEdit} className="exit-edit" name="edit">
          {" "}
        </button>
        <EditingForm value={value} handleSave={handleSave} />
      </>
    );
  };
  return (
    <div className="card-item">
      <div className="card-menu-wrap ">
        <input
          onClick={handleEdit}
          type="checkbox"
          id="btnControl"
          value={props.card.id}
        />
        <label className="card-menu-btn" for="btnControl">
          <span className="btn-text">...</span>
        </label>
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
