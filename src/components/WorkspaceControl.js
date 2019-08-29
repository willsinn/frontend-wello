import React, { useState } from "react";
import ItemDropdownMenu from "./ItemDropdownMenu";

const WorkspaceControl = props => {
  const [dropdown, setDropdown] = useState(false);
  const closeDropdown = e => {
    setDropdown(false);
  };
  return (
    <div className="workspace-item-control">
      <span className="item-control-name">{props.item.objective}</span>
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
        />
      ) : null}
    </div>
  );
};

export default WorkspaceControl;
