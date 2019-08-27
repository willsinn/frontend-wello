import React from "react";
import CardItem from "./CardItem";
import { connect } from "react-redux";

const CardsList = props => {
  console.log(props.editedCard);
  return props.cards.map(card => (
    <div className="card-item">
      <CardItem card={card} />
    </div>
  ));
};
const mapStateToProps = ({ workspaceReducer: editedCard }) => ({
  editedCard: editedCard
});
export default connect(mapStateToProps)(CardsList);
