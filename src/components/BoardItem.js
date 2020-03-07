import React from "react";
import { connect } from "react-redux";
import { setPage } from "../actions/user";
import { incrementCounter } from "../actions/user";
import { fetchWorkspace } from "../actions/workspace";
import { clearWorkspace } from "../actions/workspace";

const BoardItem = (props, { dispatch }) => {
  const handleClick = e => {
    if (e) {
      props.dispatch(clearWorkspace());
      props.dispatch(fetchWorkspace(props.board));
      props.dispatch(incrementCounter());
      props.dispatch(setPage("board"));
    }
  };
  return (
    <div onClick={handleClick} className="board-list-item">
      {props.board.title}
    </div>
  );
};
export default connect()(BoardItem);
