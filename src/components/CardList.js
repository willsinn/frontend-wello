import React, { useState } from "react";
import CardItem from "./CardItem";
import AddBoardItem from "../containers/AddBoardItem";
import { connect } from "react-redux";

const CardList = props => {
  const [deck, setDeck] = useState(props.workspace.cards);
  const [active, setActive] = useState(false);
  const handleCloseForm = e => {
    setActive(false);
  };
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
          <CardItem
            key={`board-${props.workspace.id}-${card.id}`}
            card={card}
            workspace={props.workspace}
          />
        );
      });
    }
  };
  return (
    <div className="board-content-wrap">
      <div className="board-content">
        <div className="board-cards">
          {renderItems()}
          {!active ? (
            <div className="card-item-wrap" onClick={e => setActive(true)}>
              <div className="card-item idle-add-card-item">
                <span className="placeholder">
                  <div style={{ fontSize: "18px", padding: "0 4px" }}>+</div>
                  Add another list
                </span>
              </div>
            </div>
          ) : (
            <AddBoardItem
              workspace={props.workspace}
              updateDeck={updateDeck}
              handleCloseForm={handleCloseForm}
            />
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ workspaceReducer: workspace }) => ({
  workspace: workspace.workspace
});

export default connect(mapStateToProps)(CardList);
