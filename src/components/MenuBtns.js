import React, { useState } from "react";
import CardBtns from "./CardBtns";
import EditingForm from "./EditingForm";
import Card from "./Card";

const MenuBtns = props => {
  const [render, setRender] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleEdit = e => {
    if (e) {
      setEdit(!edit);
      setRender(!render);
    }
  };

  return (
    <div className="card">
      <div className="card-btns">
        <div className="card-menu-wrap">
          <input
            onClick={e => setRender(!render)}
            type="checkbox"
            id="btnControl"
          />
          <label className="card-menu-btn" htmlFor="btnControl">
            <span className="btn-text">...</span>
          </label>
        </div>
      </div>

      {edit ? (
        <EditingForm card={props.card} handleEdit={handleEdit} />
      ) : (
        <Card card={props.card} />
      )}
      {render ? <CardBtns card={props.card} handleEdit={handleEdit} /> : null}
    </div>
  );
};

export default MenuBtns;
// {edit ? (
//   <EditingForm
//     card={props.card}
//     subject={subject}
//     handleSave={handleSave}
//   />}
