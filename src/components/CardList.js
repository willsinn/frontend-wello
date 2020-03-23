import React, { useState } from "react";
import Card from "../containers/Card";
import AddBoardCard from "./AddBoardCard";
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
          <Card
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
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: "300",
                      padding: "0 4px"
                    }}
                  >
                    +
                  </span>
                  Add another list
                </span>
              </div>
            </div>
          ) : (
            <AddBoardCard
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
