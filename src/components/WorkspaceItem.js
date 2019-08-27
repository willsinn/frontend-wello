import React, { useState } from "react";
import AddCardMessage from "../containers/AddCardMessage";
import CardsList from "./CardsList";
import { connect } from "react-redux";

const WorkspaceItem = props => {
  const updateCards = () => {
    if (props.item.cards !== undefined) {
      const cards = props.item.cards;
      if (props.item.id === props.updatedItem.id) {
        const updated = props.updatedItem.cards;
        return <CardsList cards={updated} />;
      }
      return <CardsList cards={cards} />;
    }
  };
  return (
    <div className="wsp-title-wrapper">
      <div className="wsp-title">{updateCards()}</div>
      <AddCardMessage item={props.item} />
    </div>
  );
};
const mapStateToProps = ({ workspaceReducer: workspace }) => ({
  workspace: workspace,
  updatedItem: workspace.updatedItem
});
export default connect(mapStateToProps)(WorkspaceItem);
