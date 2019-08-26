import React, { useState } from "react";
import MenuBtn from "./MenuBtn";
import CardBtns from "./CardBtns";
import Card from "./Card";
import EditingForm from "./EditingForm";
import { updateCard } from "../actions/workspace";
import { toggleEdit } from "../actions/workspace";
import { connect } from "react-redux";

const CardItem = props => {
  const [render, setRender] = useState(false);
  const [edit, setEdit] = useState(false);
  const [menu, setMenu] = useState(false);
  const [subject, setSubject] = useState(props.card.subject);

  const renderOptions = card => {
    setRender(!render);
  };
  const handleEdit = () => {
    setEdit(!edit);
    props.dispatch(toggleEdit());
  };

  const handleSave = input => {
    props.dispatch(
      updateCard({
        id: props.card.id,
        key: "subject",
        value: input
      }),
      props.dispatch(toggleEdit()),
      setSubject(input),
      setEdit(!edit),
      setRender(!render),
      setMenu(!menu)
    );
  };
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
  //       <button onClick={clearEdit} className="exit-render" name="render">
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
            <MenuBtn card={props.card} renderOptions={renderOptions} />

            {edit ? (
              <EditingForm card={props.card} handleSave={handleSave} />
            ) : (
              <Card card={props.card} subject={subject} />
            )}
            {render ? (
              <CardBtns card={props.card} handleEdit={handleEdit} />
            ) : null}
          </div>
        ) : (
          <Card card={props.card} subject={subject} />
        )}
      </div>
    </div>
  );
};
const mapStateToProps = ({ workspaceReducer: isEditActive }) => ({
  isEditActive: isEditActive
});
export default connect(mapStateToProps)(CardItem);
