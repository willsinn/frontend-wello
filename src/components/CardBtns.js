import React from "react";
import DelCardBtn from "./DelCardBtn";

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
      <DelCardBtn card={props.card} />
    </div>
  );
};

export default CardBtns;
