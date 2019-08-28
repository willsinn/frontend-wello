import React, { useState } from "react";
import MenuBtns from "./MenuBtns";
import Card from "./Card";

const CardItem = props => {
  const [menu, setMenu] = useState(false);
  return (
    <div
      className="card-item"
      onMouseEnter={e => setMenu(true)}
      onMouseLeave={e => setMenu(false)}
    >
      {menu ? <MenuBtns card={props.card} /> : <Card card={props.card} />}
    </div>
  );
};

export default CardItem;
