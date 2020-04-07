import React, { useState } from "react";
import Card from "../containers/Card";
import AddCard from "./AddCard";
import { connect } from "react-redux";

const CardList = props => {
  const [addCard, setAddCard] = useState(false);
  const [cardMenu, setCardMenu] = useState(false);
  const [actionCard, setActionCard] = useState({});
  const handleCloseCardForm = e => {
    setAddCard(false);
  };
  const handleCloseCardMenu = e => {
    setCardMenu(false);
  };
  const handleOpenCardMenu = (e, targCard) => {
    setActionCard(targCard);
    setCardMenu(true);
  };
  const renderItems = () => {
    if (props.workspace.cards.length > 0) {
      return props.workspace.cards.map(card => {
        return (
          <Card
            key={`board-${props.workspace.id}-${card.id}`}
            card={card}
            workspace={props.workspace}
            cardMenu={cardMenu}
            actionCard={actionCard}
            handleCloseCardMenu={handleCloseCardMenu}
            handleOpenCardMenu={handleOpenCardMenu}
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
              handleCloseCardForm={handleCloseCardForm}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cards: state.workspaceReducer.workspace.cards
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);
