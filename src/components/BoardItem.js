import React from "react";
import Lake from "../images/lake.jpg";
import Mountians from "../images/mountians.jpg";
import Cityscape from "../images/cityscape.jpg";
import Beach from "../images/beach.jpg";
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
    <div
      style={{ backgroundImage: `url(${Lake})` }}
      onClick={handleClick}
      className="board-item"
    >
      {props.board.title}
    </div>
  );
};
export default connect()(BoardItem);
