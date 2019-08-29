import React, { useState } from "react";
import ItemDelBtn from "./ItemDelBtn";

const WorkspaceControl = props => {
  return (
    <div className="workspace-item-control">
      <span className="item-control-name">{props.item.objective}</span>
      <button className="btn-text">...</button>

      <div className="item-menu">
        <span className="item-control-delete">
          <ItemDelBtn item={props.item} workspace={props.workspace} />
        </span>
      </div>
    </div>
  );
};

export default WorkspaceControl;
