import React from "react";
import ItemDelBtn from "./ItemDelBtn";

const ItemDropdownMenu = props => {
  const handleClose = e => {
    if (e) {
      props.closeDropdown(e);
    }
  };

  return (
    <div className="item-menu">
      <div className="item-menu-close-wrapper">
        <div className="item-menu-btn close">
          <button onClick={handleClose} className="close-btn">
            <span>✖︎</span>
          </button>
        </div>
        <p className="item-menu-p">List Actions</p>
      </div>
      <div className="item-menu-btn edit">
        <button onClick={props.handleEdit} className="list-action-btn">
          <span>Update List Title</span>
        </button>
      </div>

      <div className="item-menu-btn delete">
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
