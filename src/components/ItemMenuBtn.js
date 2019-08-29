import React from "react";
import ItemDeleteBtn from "./ItemDeleteBtn";

const ItemMenuBtn = props => {
  return (
    <div className="workspace-item-control">
      <div className="item-menu">
        <button className="btn-text">...</button>
      </div>
      <span className="item-control-name">{props.item.objective}</span>
      <span className="item-control-delete">
        <ItemDeleteBtn item={props.item} workspace={props.workspace} />
      </span>
    </div>
  );
};

export default ItemMenuBtn;
