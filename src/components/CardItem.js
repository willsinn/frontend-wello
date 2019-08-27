import React, { useState } from "react";
import MenuBtns from "./MenuBtns";
import Card from "./Card";

const CardItem = props => {
  const [menu, setMenu] = useState(false);
  return (
    <div onMouseEnter={e => setMenu(!menu)} onMouseLeave={e => setMenu(!menu)}>
      {menu ? <MenuBtns card={props.card} /> : <Card card={props.card} />}
    </div>
  );
};

export default CardItem;
