import React, { useState } from "react";
import TaskList from "../components/TaskList";
import CardMenu from "./CardMenu";
import { connect } from "react-redux";
import { updateCardGoal } from "../actions/workspace";

const initialState = { goal: "" };
const Card = ({
  card,
  workspace,
  cardMenu,
  actionCard,
  handleCloseCardMenu,
  handleOpenCardMenu,
  dispatch
}) => {
  const [editCard, setEditCard] = useState({});
  const [goal, setGoal] = useState(initialState);
  const handleCardCloseEdit = () => {
    setEditCard({});
    setGoal("");
  };
  const handleCardGoalEdit = () => {
    setEditCard(card);
    setGoal(card.goal);
  };
  const clearState = e => {
    setGoal({ ...initialState });
    setEditCard({});
    e.target.firstElementChild.value = "";
  };
  const handleChange = e => {
    e.persist();
    setGoal(e.target.value);
  };
  const handleSubmitCard = e => {
    if (e) {
      e.preventDefault();
      dispatch(updateCardGoal(editCard, goal));
      clearState(e);
    }
  };
  console.log(goal);
  return (
    <div className="card-item-wrap" onMouseLeave={e => handleCardCloseEdit()}>
      <div className="card-item">
        <div className="card-item-content">
          <div className="card-item-header">
            <span className="edit-card-title">
              {editCard.id === undefined ? (
                <h2 className="card-text" onClick={e => handleCardGoalEdit()}>
                  {card.goal}
                </h2>
              ) : (
                <form onSubmit={handleSubmitCard}>
                  <input
                    type="text"
                    name="goal"
                    onChange={handleChange}
                    value={goal}
                    required
                  />
                </form>
              )}
            </span>

            <span
              onClick={e => handleOpenCardMenu(e, card)}
              className="card-icon"
            >
              <span
                className="icon-sm"
                style={{ position: "relative", right: "-9px", top: "1px" }}
              >
                ...
              </span>
            </span>
            {cardMenu && actionCard.id === card.id ? (
              <CardMenu card={card} handleCloseCardMenu={handleCloseCardMenu} />
            ) : null}
          </div>
          <TaskList card={card} />
        </div>
      </div>
    </div>
  );
};

export default connect()(Card);
