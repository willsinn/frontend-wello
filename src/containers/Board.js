import React, { useState, useEffect } from "react";
import Boards from "../components/Boards";
import HomeBtn from "../components/HomeBtn";
import DelBoardBtn from "../components/DelBoardBtn";
import { connect } from "react-redux";
import Mountians from "../images/mountianrange.jpg";
import Lake from "../images/lake.jpg";
import Beach from "../images/beach.jpg";

const Board = props => {
  const [index, setIndex] = useState(null);
  const bgs = [Mountians, Lake, Beach];

  useEffect(
    () => {
      const count = props.bgCounter;
      const allBGS = bgs.length;
      const trimCount = count % allBGS;
      if (count === allBGS) {
        setIndex(0);
      } else if (count > allBGS) {
        setIndex(trimCount);
      } else {
        setIndex(count);
      }
    },
    [props.bgCounter, bgs.length]
  );

  return (
    <div id="workspace" style={{ backgroundImage: `url('${bgs[index]}')` }}>
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
          <DelBoardBtn workspace={props.workspace} />
        </div>
      </div>
      <Boards key={props.workspace.id} workspace={props.workspace} />
    </div>
  );
};
const mapStateToProps = ({ userReducer: user }) => ({
  user: user,
  bgCounter: user.bgCounter
});
export default connect(mapStateToProps)(Board);
