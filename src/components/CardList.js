import React, { useState } from "react";
import Card from "../containers/Card";
import AddCard from "./AddCard";
import { connect } from "react-redux";

const CardList = props => {
  const [cardList, setCardList] = useState(props.workspace.cards);
  const [addCard, setAddCard] = useState(false);
  const handleCloseForm = e => {
    setAddCard(false);
  };
  const updateCardList = newGoal => {
    console.log(cardList);
    const newCard = cardList[cardList.length - 1];
    const newCardList = [
      ...cardList,
      {
        id: parseInt(newCard.id + 1),
        goal: newGoal,
        summary: null,
        board_id: parseInt(props.workspace.id),
        tasks: []
      }
    ];
    setCardList(newCardList);
  };
  const renderItems = () => {
    if (cardList.length > 0) {
      return cardList.map(card => {
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
          {!addCard ? (
            <div className="card-item-wrap" onClick={e => setAddCard(true)}>
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
            <AddCard
              workspace={props.workspace}
              updateCardList={updateCardList}
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
