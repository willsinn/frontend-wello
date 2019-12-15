import React, { useState, useEffect } from "react";
import Boards from "../components/Boards";
import HomeBtn from "../components/HomeBtn";
import WorkspaceMenuBtns from "../components/WorkspaceMenuBtns";
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
      <div className="project-workspace-control">
        <div className="board-ops left">
          <div className="board-ops title-top">{props.workspace.title}</div>
        </div>
        <div className="board-ops right">
          <WorkspaceMenuBtns workspace={props.workspace} />
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
