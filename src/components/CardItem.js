import React from "react";

const CardItem = props => {
  return (
    <div className="card-item">
      <div className="card-content"> {props.card.subject}</div>
    </div>
  );
};
export default CardItem;
