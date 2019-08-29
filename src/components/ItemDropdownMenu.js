import React, { useState } from "react";
import ItemDelBtn from "./ItemDelBtn";

const ItemDropdownMenu = props => {
  return (
    <div className="item-menu">
      <div className="item-menu-btn">
        <button className="btn-text">X</button>
      </div>

      <div className="item-menu-btn">
        <button className="btn-text">TOGGLE CARD BUTTONS</button>
      </div>

      <div className="item-menu-btn">
        <button className="btn-text">EDIT TITLE</button>
      </div>

      <div className="item-control-delete">
        <ItemDelBtn item={props.item} workspace={props.workspace} />
      </div>
    </div>
  );
};
export default ItemDropdownMenu;
