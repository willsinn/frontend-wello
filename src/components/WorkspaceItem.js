import React from "react";
import AddCardMessage from "../containers/AddCardMessage";
import CardsList from "./CardsList";
import { connect } from "react-redux";

const WorkspaceItem = props => {
  return (
    <div className="wsp-title-wrapper">
      <CardsList
        key={`one${props.item.id}`}
        item={props.item}
        cards={props.item.cards}
      />
      <AddCardMessage key={props.item.id} item={props.item} />
    </div>
  );
};

export default WorkspaceItem;
