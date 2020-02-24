import React, { useState, useEffect } from "react";
import BoardItemList from "../components/BoardItemList";
import DelBoardBtn from "../components/DelBoardBtn";
import { connect } from "react-redux";

const Board = props => {
  const [index, setIndex] = useState(null);

  return (
    <div id="workspace" style={{ background: `${props.workspace.background}` }}>
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
      <BoardItemList key={props.workspace.id} workspace={props.workspace} />
    </div>
  );
};
const mapStateToProps = ({ userReducer: user }) => ({
  user: user,
  bgCounter: user.bgCounter
});
export default connect(mapStateToProps)(Board);
