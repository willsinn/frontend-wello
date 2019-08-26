import React, { useState } from "react";

const Card = props => {
  const [subject, setSubject] = useState(props.card.subject);
  return <div className="card">{subject}</div>;
};
export default Card;
