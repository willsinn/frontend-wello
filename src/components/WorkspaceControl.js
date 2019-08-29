import React, { useState } from "react";
import ItemDropdownMenu from "./ItemDropdownMenu";

const WorkspaceControl = props => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="workspace-item-control">
      <span className="item-control-name">{props.item.objective}</span>
      <button className="btn-text">...</button>
      <ItemDropdownMenu item={props.item} workspace={props.workspace} />
    </div>
  );
};

export default WorkspaceControl;
