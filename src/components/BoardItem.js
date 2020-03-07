import React from "react";
import Lake from "../images/lake.jpg";
import Mountians from "../images/mountians.jpg";
import Cityscape from "../images/cityscape.jpg";
import City from "../images/city.jpeg";
import Iceland from "../images/iceland.jpg";
import Meadow from "../images/meadow.jpg";
import Waterfall from "../images/waterfall.jpeg";
import Beach from "../images/beach.jpg";
import Autumn from "../images/autumn.jpg";
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
  const renderBoardBg = () => {
    switch (props.board.background) {
      case "lake":
        return { backgroundImage: `url(${Lake})` };
      case "mountians":
        return { backgroundImage: `url(${Mountians})` };
      case "cityscape":
        return { backgroundImage: `url(${Cityscape})` };
      case "beach":
        return { backgroundImage: `url(${Beach})` };
      case "autumn":
        return { backgroundImage: `url(${Autumn})` };
      case "waterfall":
        return { backgroundImage: `url(${Waterfall})` };
      case "city":
        return { backgroundImage: `url(${City})` };
      case "meadow":
        return { backgroundImage: `url(${Meadow})` };
      case "iceland":
        return { backgroundImage: `url(${Iceland})` };
      default:
        return { background: "blue" };
    }
  };
  return (
    <div style={renderBoardBg()} onClick={handleClick} className="board-item">
      {props.board.title}
    </div>
  );
};
export default connect()(BoardItem);
