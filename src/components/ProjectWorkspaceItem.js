import React, { useState } from "react";
import CardItem from "./CardItem";
import AddCardItem from "../containers/AddCardItem";

const ProjectWorkspaceItem = props => {
  const [cards, setCards] = useState(props.cards);
  const handleDeleteCard = deleted => {
    const array = cards.filter(card => card.id !== deleted.id);
    setCards(array);
  };
  const renderCards = () => {
    if (Array.isArray(props.updatedCards)) {
      const newCards = [...props.updatedCards];
      return newCards.map(card => (
        <CardItem card={card} handleDeleteCard={handleDeleteCard} />
      ));
    } else {
      return [...props.item.cards].map(card => (
        <CardItem card={card} handleDeleteCard={handleDeleteCard} />
      ));
    }
  };
  return (
    <div className="wsp-title-wrapper">
      <div className="wsp-title">{renderCards()}</div>
      <AddCardItem item={props.item} />
    </div>
  );
};

export default ProjectWorkspaceItem;
