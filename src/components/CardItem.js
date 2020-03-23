import React from "react";

const CardItem = props => {
  return (
    <div className="card-item-wrap">
      <div className="card-item">
        <div className="card-item-content">
          <div className="card-item-header">
            <div className="editing-target">
              <h2>{props.card.goal}</h2>
            </div>
            <div>...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
