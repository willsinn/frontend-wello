import React from "react";
import CardDelBtn from "./CardDelBtn";

const CardBtns = props => {
  const editClick = e => {
    if (e) {
      props.handleEdit(e);
    }
  };

  return (
    <div className="card-btns">
      <button className="card-edit-btn" onClick={editClick}>
        edit
      </button>
      <CardDelBtn card={props.card} />
    </div>
  );
};

export default CardBtns;
