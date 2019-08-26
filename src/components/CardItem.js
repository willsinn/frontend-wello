import React, { useState } from "react";
import EditBtn from "./EditBtn";
import Card from "./Card";
import { deleteCard } from "../actions/workspace";
import { updateCard } from "../actions/workspace";
import { toggleEdit } from "../actions/workspace";
import { connect } from "react-redux";

const CardItem = props => {
  const [subject, setSubject] = useState(props.card.subject);
  const [menu, setMenu] = useState(false);
  const handleEdit = card => {
    setSubject(card.subject);
    props.dispatch(toggleEdit());
  };
  const handleDeleteCard = e => {
    if (e) {
      props.dispatch(deleteCard(props.card));
      props.handleDeleteCard(props.card);
    }
  };

  // const handleSave = input => {
  //   props.dispatch(
  //     updateCard({
  //       id: props.card.id,
  //       key: "subject",
  //       value: input
  //     }),
  //     clearEdit(),
  //     setValue(input)
  //   );
  // };
  // const renderMenu = () => (
  //   <div className="card-content">
  //     {value}
  //     <button onClick={handleDeleteCard}>X</button>
  //     <button onClick={clearEdit}>Edit</button>
  //   </div>
  // );
  // const renderEditing = () => {
  //   return (
  //     <>
  //       <button onClick={clearEdit} className="exit-edit" name="edit">
  //         {" "}
  //       </button>
  //       <EditingForm value={value} handleSave={handleSave} />
  //     </>
  //   );
  // };

  return (
    <div className="card-item">
      <div
        onMouseEnter={e => setMenu(!menu)}
        onMouseLeave={e => setMenu(!menu)}
      >
        {menu ? (
          <div>
            <EditBtn card={props.card} handleEdit={handleEdit} />
            <Card card={props.card} />
          </div>
        ) : (
          <Card card={props.card} />
        )}
      </div>
    </div>
  );
};
const mapStateToProps = ({ workspaceReducer: isEditActive }) => ({
  isEditActive: isEditActive
});
export default connect(mapStateToProps)(CardItem);
