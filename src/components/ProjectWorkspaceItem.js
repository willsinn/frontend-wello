import React, { useState } from "react";
import CardItem from "./CardItem";
import AddCardItem from "../containers/AddCardItem";

const ProjectWorkspaceItem = props => {
  const [cards, setCards] = useState(props.cards);
  const handleDeleteCard = deleted => {
    const array = cards.filter(card => card.id !== deleted.id);
    setCards(array);
  };
  const handleAddCard = itemId => {
    if (props.newCard.item_id !== undefined) {
      if (itemId === props.newCard.item_id) {
        const array = [...cards, props.newCard];
        setCards(array);
      }
    }
  };
  const renderCards = () => {
    return cards.map(card => (
      <CardItem card={card} handleDeleteCard={handleDeleteCard} />
    ));
  };
  return (
    <div className="wsp-title-wrapper">
      <div className="wsp-title">{renderCards()}</div>
      <AddCardItem item={props.item} handleAddCard={handleAddCard} />
    </div>
  );
};

export default ProjectWorkspaceItem;
