import React from "react";
import CardItem from "./CardItem";
import { connect } from "react-redux";

const CardsList = props => {
  const renderCards = () => {
    return props.cards.map(card => <CardItem key={card.id} card={card} />);
  };

  return <div className="wsp-title">{renderCards()}</div>;
};
const mapStateToProps = ({ workspaceReducer: newCard }) => ({
  newCard: newCard.newCard,
  editedCard: newCard.editedCard
});
export default connect(mapStateToProps)(CardsList);
