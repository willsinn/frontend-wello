import React, { useState } from "react";
import CardItem from "./CardItem";
import AddCardMessage from "../containers/AddCardMessage";
import { connect } from "react-redux";
const ProjectWorkspaceItem = props => {
  const [cards, setCards] = useState(props.cards);
  const handleDeleteCard = deleted => {
    const array = cards.filter(card => card.id !== deleted.id);
    setCards(array);
  };

  const renderCards = () => {
    if (Array.isArray(props.cards)) {
      const cardsArray = [...props.cards];
      return cardsArray.map(card => (
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

export default ProjectWorkspaceItem;
