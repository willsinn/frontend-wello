import React from "react";
import BoardItem from "../components/BoardItem";

const StarredBoardList = ({ boards }) => {
  const renderTiles = () => {
    if (boards && boards.length > 0) {
      const starredBoards = boards.filter((board) => board.starred);
      return starredBoards.map((board) => (
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
      <div className="board-tiles-section-header">
        <h3 className="personal-tiles">Starred</h3>
      </div>
      <ul className="board-tiles-ul">{renderTiles()}</ul>
    </div>
  );
};

export default StarredBoardList;
