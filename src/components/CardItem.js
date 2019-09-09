import React, { useState } from "react";
import CardMenuBtn from "./CardMenuBtn";
import Card from "./Card";
import EditingForm from "./EditingForm";
import CardBtns from "./CardBtns";

const CardItem = props => {
  const [menu, setMenu] = useState(false);
  const [render, setRender] = useState(false);
  const [edit, setEdit] = useState(false);
  const [subject, setSubject] = useState(props.card.subject);

  const handleRender = e => {
    setRender(!render);
    if (edit === true) {
      setEdit(false);
    }
  };
  const handleEdit = e => {
    setEdit(true);
    setRender(false);
  };
  const handleSave = input => {
    setSubject(input);
    setEdit(false);
    setMenu(false);
    setRender(false);
  };
  const handleMouseLeave = e => {
    if (e) {
      setMenu(false);
      setEdit(false);
      setRender(false);
    }
  };
  return (
    <div
      className="card-item"
      onMouseEnter={e => setMenu(true)}
      onMouseLeave={handleMouseLeave}
    >
      {menu ? (
        <CardMenuBtn card={props.card} handleRender={handleRender} />
      ) : null}
      {edit ? (
        <EditingForm
          card={props.card}
          subject={subject}
          handleSave={handleSave}
        />
      ) : (
        <Card card={props.card} subject={subject} />
      )}
      {render ? <CardBtns card={props.card} handleEdit={handleEdit} /> : null}
    </div>
  );
};

export default CardItem;
