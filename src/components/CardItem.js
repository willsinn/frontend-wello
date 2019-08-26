import React, { useState } from "react";
import EditBtn from "./EditBtn";
import EditingForm from "./EditingForm";
import { deleteCard } from "../actions/workspace";
import { updateCard } from "../actions/workspace";
import { toggleEdit } from "../actions/workspace";
import { connect } from "react-redux";

const CardItem = props => {
  const [value, setValue] = useState(props.card.subject);
  const [menu, setMenu] = useState(false);
  console.log(props.isEditActive);
  const handleDeleteCard = e => {
    if (e) {
      props.dispatch(deleteCard(props.card));
      props.handleDeleteCard(props.card);
    }
  };
  const handleClick = e => {
    if (e) {
      props.handleEditCard(props.card);
      setMenu(!menu);
    }
  };
  const clearEdit = e => {
    if (e) {
      setMenu(!menu);
      props.dispatch(clearEdit());
    }
  };
  const handleSave = input => {
    props.dispatch(
      updateCard({
        id: props.card.id,
        key: "subject",
        value: input
      }),
      clearEdit(),
      setValue(input)
    );
  };
  const renderMenu = () => (
    <div className="card-content">
      {value}
      <button onClick={handleDeleteCard}>X</button>
      <button onClick={clearEdit}>Edit</button>
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
      <EditBtn
        card={props.card}
        editCard={props.editCard}
        isEditActive={props.isEditActive}
        handleClick={handleClick}
      />
      <div>{props.card.subject}</div>
    </div>
  );
};
const mapStateToProps = ({ workspaceReducer: isEditActive }) => ({
  isEditActive: isEditActive
});
export default connect(mapStateToProps)(CardItem);
