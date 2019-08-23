import React from "react";

const CardItem = props => {
  return (
    <div className="card-item">
      <button className="card-delete-btn">-</button>
      <div className="card-content">{props.card.subject}</div>
    </div>
  );
};
export default CardItem;
