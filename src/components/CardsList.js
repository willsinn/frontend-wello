import React, { useState } from "react";
import CardItem from "./CardItem";

const CardsList = props => {
  return props.cards.map(card => (
    <div className="card-item">
      <CardItem card={card} />
    </div>
  ));
};

export default CardsList;
