import React from "react";
import BoardItem from "../components/BoardItem";
import { connect } from "react-redux";

const PersonalBoardList = ({ boards }) => {
  const renderTiles = () => {
    if (boards.length > 0) {
      return boards.map((board) => (
        <li className="board-tile" key={`tile-${board.id}`}>
          <div className="tile-content-wrapper">
            <BoardItem key={board.id} board={board} />
          </div>
        </li>
      ));
    }
  };
  return (
    <div className="personal-boards">
      <h2 className="personal-tiles">Personal</h2>
      <ul className="board-tiles-ul">{renderTiles()}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { boards: state.boardsReducer.boards };
};
export default connect(mapStateToProps)(PersonalBoardList);
