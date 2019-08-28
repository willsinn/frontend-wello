import React, { useState } from "react";
import MenuBtns from "./MenuBtns";
import Card from "./Card";
import EditingForm from "./EditingForm";
import CardBtns from "./CardBtns";

const CardItem = props => {
  const [menu, setMenu] = useState(false);
  // when you hover menu shows (menu state)
  // clicking menu button renders buttons --- phase in buttons (renderState)
  // clicking edit renders editing form --- swap out card (editState)
  return (
    <div
      className="card-item"
      onMouseEnter={e => setMenu(true)}
      onMouseLeave={e => setMenu(false)}
    >
      {menu ? <MenuBtns card={props.card} /> : null}
      <Card card={props.card} />
    </div>
  );
};

export default CardItem;
