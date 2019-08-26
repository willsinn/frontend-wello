import React, { useState } from "react";
import CardItem from "./CardItem";

const CardsList = props => {
  return props.cards.map(card => <CardItem card={card} />);
};

export default CardsList;
