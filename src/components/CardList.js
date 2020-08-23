import React, { useState } from "react";
import Card from "../containers/Card";
import AddCard from "./AddCard";
import { connect } from "react-redux";

const CardList = ({ cards, board_id }) => {
  const [addCard, setAddCard] = useState(false);
  const [cardMenu, setCardMenu] = useState(false);
  const [actionCard, setActionCard] = useState({});
  const handleCloseCardForm = (e) => {
    setAddCard(false);
  };
  const handleCloseCardMenu = (e) => {
    setCardMenu(false);
  };
  const handleOpenCardMenu = (e, targCard) => {
    setActionCard(targCard);
    setCardMenu(true);
  };
  const renderCards = () => {
    if (cards && cards.length > 0) {
      return cards.map((card) => {
        if (!card.archived) {
          return (
            <Card
              key={`board-${board_id}-${card.id}`}
              card={card}
              cardMenu={cardMenu}
              actionCard={actionCard}
              handleCloseCardMenu={handleCloseCardMenu}
              handleOpenCardMenu={handleOpenCardMenu}
            />
          );
        } else {
          return null;
        }
      });
    }
  };
  return (
    <div className="board-content-wrap">
      <div className="board-content">
        <div className="board-cards">
          {renderCards()}
          {!addCard ? (
            <div className="card-item-wrap" onClick={(e) => setAddCard(true)}>
              <div className="card-item idle-add-card-item">
                <span className="placeholder">
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: "300",
                      padding: "0 4px",
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
              boardId={board_id}
              handleCloseCardForm={handleCloseCardForm}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.workspaceReducer.cards,
    board_id: state.workspaceReducer.workspace.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
