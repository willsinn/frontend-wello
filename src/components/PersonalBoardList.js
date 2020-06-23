import React from "react";
import BoardItem from "../components/BoardItem";

const PersonalBoardList = ({ boards }) => {
  const filtered = boards.filter((board) => !board.archived);

  const renderTiles = () => {
    if (boards.length > 0) {
      return filtered.map((board) => (
        <li className="board-tile" key={`p-tile-${board.id}`}>
          <div className="tile-content-wrapper">
            <BoardItem key={board.id} board={board} />
          </div>
        </li>
      ));
    }
  };
  return (
    <div className="boards-listed-tiles">
      <div className="board-tiles-section-header">
        <span className="home-section-title">Personal Boards</span>
      </div>

      <ul className="board-tiles-ul">{renderTiles()}</ul>
    </div>
  );
};

export default PersonalBoardList;
