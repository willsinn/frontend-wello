import React from "react";
import BoardItem from "../components/BoardItem";

const StarredBoardList = ({ boards }) => {
  const starredBoards = boards.filter((board) => board.starred);

  const renderTiles = () => {
    if (boards && boards.length > 0) {
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
        <span className="home-section-title">Starred</span>
      </div>
      <ul className="board-tiles-ul">{renderTiles()}</ul>
    </div>
  );
};

export default StarredBoardList;
