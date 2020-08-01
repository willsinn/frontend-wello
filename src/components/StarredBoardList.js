import React from "react";
import BoardItem from "../components/BoardItem";

const StarredBoardList = ({ boards }) => {
  const renderTiles = () => {
    if (boards && boards.length > 0) {
      const starredBoards = boards.filter(
        (board) => board.starred && !board.archived
      );
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
    <div className="boards-section">
      <div className="personal-boards">
        <div className="board-tiles-section-header">
          <span className="home-section-title">
            <i className="fa fa-star-o side-icon" aria-hidden="true"></i>
            Starred
          </span>
        </div>
        <ul className="board-tiles-ul">{renderTiles()}</ul>
      </div>
    </div>
  );
};

export default StarredBoardList;
