import React, { useState } from "react";
import CardItem from "./CardItem";
import AddCardMessage from "../containers/AddCardMessage";
import { toggleEdit } from "../actions/workspace";
import { connect } from "react-redux";

const initialState = {};
const ProjectWorkspaceItem = (props, { dispatch }) => {
  const [editCard, setEditCard] = useState(initialState);
  const [cards, setCards] = useState(props.cards);
  const handleDeleteCard = deleted => {
    const array = cards.filter(card => card.id !== deleted.id);
    setCards(array);
  };
  const handleEditCard = card => {
    setEditCard(card);
    props.dispatch(toggleEdit());
  };
  const renderCards = () => {
    if (Array.isArray(props.cards)) {
      const cardsArray = [...props.cards];
      return cardsArray.map(card => (
        <CardItem
          card={card}
          handleDeleteCard={handleDeleteCard}
          handleEditCard={handleEditCard}
          editCard={editCard}
        />
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
const mapStateToProps = ({ workspaceReducer: isEditActive }) => ({
  isEditActive: isEditActive
});
export default connect(mapStateToProps)(ProjectWorkspaceItem);
