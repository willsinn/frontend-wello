import React from "react";

const CardItem = props => {
  return (
    <div className="card-item-wrap">
      <div className="card-item">
        <div className="card-item-content">
          <div className="card-item-header">
            <span className="editing-target">
              <h2>{props.card.goal}</h2>
            </span>
            <span>...</span>
          </div>
          <div className="card-task-list" />
          <div className="add-card-task-item" />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
