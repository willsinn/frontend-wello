import React, { useState } from "react";
import CardList from "../components/CardList";
import BoardMenu from "./BoardMenu";
import QuickTaskEditor from "../components/QuickTaskEditor";

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
import { updateBoard } from "../actions/workspace";

const bgs = [
  "iceland",
  "lake",
  "mountians",
  "cityscape",
  "beach",
  "autumn",
  "waterfall",
  "city",
  "meadow"
];
const Board = (props, { dispatch }) => {
  const [background, setBackground] = useState("");
  const [editor, setEditor] = useState(false);
  const renderBoardBg = () => {
    if (background === "") {
      return findBg(props.workspace.background);
    } else {
      return findBg(background);
    }
  };
  const changeBackground = bgOption => {
    props.dispatch(
      updateBoard({
        id: props.workspace.id,
        user_id: props.workspace.user_id,
        title: props.workspace.title,
        board_desc: props.workspace.board_desc,
        background: bgOption,
        team_name: props.workspace.team_name,
        cards: props.workspace.cards
      })
    );
    setBackground(bgOption);
  };
  const bgOptions = bgs.filter(bg => bg !== props.workspace.background);
  const renderQuickEditor = e => {
    setEditor(true);
  };
  const findBg = bgKey => {
    switch (bgKey) {
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
        return;
    }
  };
  return (
    <div id="board" style={renderBoardBg()}>
      {editor ? <QuickTaskEditor /> : null}
      <div className="board-header-wrap">
        <div className="board-header">
          <div className="board-ops left">
            <div className="board-ops title-top">
              <span
                className="b-name"
                style={{
                  paddingLeft: "12px",
                  paddingRight: "12px"
                }}
              >
                {props.workspace.title}
              </span>
              <button className="navbar-btn">
                <span className="fav-star-icon icon" />
              </button>
            </div>
          </div>
          <div className="board-ops right">
            <BoardMenu
              workspace={props.workspace}
              findBg={findBg}
              bgOptions={bgOptions}
              changeBackground={changeBackground}
            />
          </div>
        </div>
      </div>
      <div className="board-body">
        <CardList
          key={props.workspace.id}
          workspace={props.workspace}
          renderQuickEditor={renderQuickEditor}
        />
      </div>
    </div>
  );
};
const mapStateToProps = ({ userReducer: user }) => ({
  user: user
});
export default connect(mapStateToProps)(Board);
