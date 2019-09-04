import React, { useState } from "react";
import ItemDropdownMenu from "./ItemDropdownMenu";
import WorkspaceItemTitle from "./WorkspaceItemTitle";

const WorkspaceControl = props => {
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
  return (
    <div className="workspace-item-control">
      <WorkspaceItemTitle item={props.item} />
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

export default WorkspaceControl;
