import React, { useState } from "react";
import CardBtns from "./CardBtns";
import Card from "./Card";

const MenuBtns = props => {
  const [render, setRender] = useState(false);
  const renderOptions = card => {
    setRender(!render);
  };
  return (
    <div className="card-btns">
      <div className="card-menu-wrap">
        <input
          onClick={e => setRender(!render)}
          type="checkbox"
          id="btnControl"
        />
        <label className="card-menu-btn" for="btnControl">
          <span className="btn-text">...</span>
        </label>
      </div>

      {render ? <Card card={props.card} subject={props.subject} /> : null}
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
