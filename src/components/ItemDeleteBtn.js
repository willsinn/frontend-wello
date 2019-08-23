import React from "react";
import { connect } from "react-redux";

const ItemDeleteBtn = (props, { dispatch }) => (
  <button className="delete-item-btn">DELETE</button>
);
export default connect()(ItemDeleteBtn);
