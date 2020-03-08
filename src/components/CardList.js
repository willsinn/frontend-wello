import React, { useState } from "react";
import CardItem from "./CardItem";
import AddBoardItem from "../containers/AddBoardItem";
import { connect } from "react-redux";

const CardList = props => {
  const [deck, setDeck] = useState(props.workspace.cards);
  const updateDeck = newGoal => {
    const newCard = deck[deck.length - 1];
    const newDeck = [
      ...deck,
      {
        id: parseInt(newCard.id + 1),
        goal: newGoal,
        summary: null,
        board_id: parseInt(props.workspace.id),
        tasks: []
      }
    ];
    setDeck(newDeck);
  };
  const renderItems = () => {
    if (deck.length > 0) {
      return deck.map(card => {
        return (
          <div
            className="card-item-wrap"
            key={`board-${props.workspace.id}-${card.id}`}
          >
            <CardItem card={card} workspace={props.workspace} />
          </div>
        );
      });
    }
  };
  console.log(deck);
  return (
    <div className="board-content-wrap">
      <div className="board-content">
        <div className="board-cards">
          {renderItems()}
          <div className="card-item-wrap">
            <AddBoardItem workspace={props.workspace} updateDeck={updateDeck} />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ workspaceReducer: workspace }) => ({
  workspace: workspace.workspace
});

export default connect(mapStateToProps)(CardList);
