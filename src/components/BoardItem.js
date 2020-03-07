import React from "react";
import Lake from "../images/lake.jpg";
import { connect } from "react-redux";
import { setPage } from "../actions/user";
import { fetchWorkspace } from "../actions/workspace";
import { clearWorkspace } from "../actions/workspace";

const BoardItem = (props, { dispatch }) => {
  const handleClick = e => {
    if (e) {
      props.dispatch(clearWorkspace());
      props.dispatch(fetchWorkspace(props.board));
      props.dispatch(setPage("board"));
    }
  };
  return (
    <li className="board-tile" style={{ backgroundImage: `url(${Lake})` }}>
      <div onClick={handleClick} className="board-list-item">
        {props.board.title}
      </div>
    </li>
  );
};
export default connect()(BoardItem);
