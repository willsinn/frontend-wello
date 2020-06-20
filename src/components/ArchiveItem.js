import React from "react";
import BoardArchiveItem from "./BoardArchiveItem";
import CardArchiveItem from "./CardArchiveItem";
import TaskArchiveItem from "./TaskArchiveItem";

// import { connect } from "react-redux";

const ArchiveItem = ({ archive, archiveType }) => {
  const renderArchive = () => {
    if (archive) {
      switch (archiveType) {
        case "board":
          return <BoardArchiveItem boardArchive={archive} />;
        case "card":
          return <CardArchiveItem cardArchive={archive} />;
        case "task":
          return <TaskArchiveItem taskArchive={archive} />;
        default:
          return;
      }
    }
  };
  return (
    <li className="archives-list-item">
      <div className="archive-item">{renderArchive()}</div>
    </li>
  );
};

export default ArchiveItem;
