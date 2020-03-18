import React, { useState } from "react";
import CardList from "../components/CardList";
import BoardMenu from "./BoardMenu";

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

const Board = props => {
  const [activeBg, setActiveBg] = useState("");
  const renderBoardBg = () => {
    switch (props.workspace.background) {
      case "lake":
        setActiveBg("lake");
        return { backgroundImage: `url(${Lake})` };
      case "mountians":
        setActiveBg("mountians");

        return { backgroundImage: `url(${Mountians})` };
      case "cityscape":
        setActiveBg("cityscape");
        return { backgroundImage: `url(${Cityscape})` };
      case "beach":
        setActiveBg();
        return { backgroundImage: `url(${Beach})` };
      case "autumn":
        setActiveBg();
        return { backgroundImage: `url(${Autumn})` };
      case "waterfall":
        setActiveBg();
        return { backgroundImage: `url(${Waterfall})` };
      case "city":
        setActiveBg();
        return { backgroundImage: `url(${City})` };
      case "meadow":
        setActiveBg();
        return { backgroundImage: `url(${Meadow})` };
      case "iceland":
        setActiveBg();
        return { backgroundImage: `url(${Iceland})` };
      default:
        setActiveBg();
        return;
    }
  };
  return (
    <div id="board" style={renderBoardBg()}>
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
            <BoardMenu workspace={props.workspace} />
          </div>
        </div>
      </div>
      <div className="board-body">
        <CardList key={props.workspace.id} workspace={props.workspace} />
      </div>
    </div>
  );
};
const mapStateToProps = ({ userReducer: user }) => ({
  user: user
});
export default connect(mapStateToProps)(Board);
