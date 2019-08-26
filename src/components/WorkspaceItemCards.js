import React, { useState } from "react";
import CardItem from "./CardItem";
import AddCardMessage from "../containers/AddCardMessage";
import { connect } from "react-redux";

const WorkspaceItemCards = props => {
  const handleDeleteCard = deleted => {
    // const array = cards.filter(card => card.id !== deleted.id);
  };
  const renderCards = () => {
    if (props.item.cards !== undefined) {
      const cards = props.item.cards;
      if (props.item.id === props.updatedItem.id) {
        const updated = props.updatedItem.cards;
        return updated.map(card => (
          <CardItem card={card} handleDeleteCard={handleDeleteCard} />
        ));
      }
      return cards.map(card => (
        <CardItem card={card} handleDeleteCard={handleDeleteCard} />
      ));
    }
  };
  return (
    <div className="wsp-title-wrapper">
      <div className="wsp-title">{renderCards()}</div>
      <AddCardMessage item={props.item} />
    </div>
  );
};
const mapStateToProps = ({ workspaceReducer: workspace }) => ({
  workspace: workspace,
  updatedItem: workspace.updatedItem
});
export default connect(mapStateToProps)(WorkspaceItemCards);
