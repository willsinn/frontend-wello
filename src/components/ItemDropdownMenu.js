import React, { useState } from "react";
import ItemDelBtn from "./ItemDelBtn";

const ItemDropdownMenu = props => {
  const handleClose = e => {
    if (e) {
      props.closeDropdown(e);
    }
  };
  const handleToggleBtns = e => {
    if (e) {
    }
  };
  const handleEdit = e => {
    if (e) {
      props.closeDropdown(e);
    }
  };
  return (
    <div className="item-menu">
      <div className="item-menu-btn">
        <button onClick={handleClose} className="drop-btn-txt">
          <span>✖︎</span>
        </button>
      </div>

      <div className="item-menu-btn">
        <button onClick={handleEdit} className="drop-btn-txt">
          <span>EDIT TITLE</span>
        </button>
      </div>

      <div className="item-control-delete">
        <ItemDelBtn
          closeDropdown={props.closeDropdown}
          item={props.item}
          workspace={props.workspace}
        />
      </div>
    </div>
  );
};
export default ItemDropdownMenu;

// const btns = ["X", "TOGGLE DEL-CARDS", "EDIT TITLE"];
// const renderBtns = () =>
//   btns.map(btn => {
//     console.log(btn);
//     return (
//       <div className="item-menu-btn">
//         <button className="drop-btn-txt">{btn}</button>
//       </div>
//     );
//   });
