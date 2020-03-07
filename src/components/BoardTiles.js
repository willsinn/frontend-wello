import React from "react";
import BoardItem from "../components/BoardItem";
import { connect } from "react-redux";

const BoardTiles = props => {
  const renderTiles = () => {
    if (props.boards.length > 0) {
      return props.boards.map(board => (
        <li
          key={board.id}
          className="board-tile"
          style={{ background: `${board.background}` }}
        >
          <BoardItem key={board.id} board={board} />
        </li>
      ));
    }
  };

  return (
    <div className="board middle-tiles container">
      <ul className="board-tiles container">{renderTiles()}</ul>
    </div>
  );
};

const mapStateToProps = ({ boardsReducer: boards }) => ({
  boards: boards.boards
});
export default connect(mapStateToProps)(BoardTiles);
