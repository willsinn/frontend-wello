import React, { useState } from "react";
import ItemDropdownMenu from "./ItemDropdownMenu";
import EditItemTitleForm from "./EditItemTitleForm";
const BoardItemCard = props => {
  const [dropdown, setDropdown] = useState(false);
  const [editing, setEditing] = useState(false);

  const closeDropdown = e => {
    setDropdown(false);
  };

  const handleEdit = e => {
    if (e) {
      setDropdown(false);
      setEditing(true);
    }
  };
  const handleSave = e => {
    if (e) {
      setEditing(false);
    }
  };
  return (
    <div className="workspace-item-control">
      {!editing ? (
        <span>{props.item.objective}</span>
      ) : (
        <EditItemTitleForm
          item={props.item}
          objective={props.item.objective}
          handleSave={handleSave}
        />
      )}
      <div className="dropdown-ctrl-btn">
        <button
          className="dropdown-btn-text"
          onClick={e => setDropdown(!dropdown)}
        >
          <span>...</span>
        </button>
      </div>
      {dropdown ? (
        <ItemDropdownMenu
          item={props.item}
          workspace={props.workspace}
          closeDropdown={closeDropdown}
          handleEdit={handleEdit}
        />
      ) : null}
    </div>
  );
};

export default BoardItemCard;
