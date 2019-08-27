import React from "react";
import CardItem from "./CardItem";
import { connect } from "react-redux";

const CardsList = props => {
  return props.cards.map(card => {
    const editCard = props.editedCard;
    if (editCard.id === card.id) {
      return (
        <div className="card-item">
          <CardItem card={editCard} />
        </div>
      );
    }
    return (
      <div className="card-item">
        <CardItem card={card} />
      </div>
    );
  });
};
const mapStateToProps = ({ workspaceReducer: editedCard }) => ({
  editedCard: editedCard.editedCard
});
export default connect(mapStateToProps)(CardsList);
