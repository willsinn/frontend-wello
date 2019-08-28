import React from "react";
import CardItem from "./CardItem";

const CardsList = props => {
  const renderCards = () => {
    return props.item.cards.map(card => <CardItem key={card.id} card={card} />);
  };
  return <div className="wsp-title">{renderCards()}</div>;
};

export default CardsList;
