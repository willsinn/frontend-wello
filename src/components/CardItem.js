import React from "react";

const CardItem = props => {
  return (
    <div className="card-item">
      <div className="card-item-content">{props.card.goal}</div>
    </div>
  );
};

export default CardItem;
