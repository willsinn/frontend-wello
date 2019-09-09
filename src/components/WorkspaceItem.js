import React from "react";
import AddCardMessage from "../containers/AddCardMessage";
import CardsList from "./CardsList";

const WorkspaceItem = props => {
  return (
    <div className="wsp-title-wrapper">
      <CardsList key={`one${props.item.id}`} item={props.item} />
      <AddCardMessage key={props.item.id} item={props.item} />
    </div>
  );
};

export default WorkspaceItem;
