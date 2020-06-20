import React from "react";
import ArchiveBoard from "./ArchiveBoard";
import ArchiveCard from "./ArchiveCard";
import ArchiveTask from "./ArchiveTask";

// import { connect } from "react-redux";

const ArchiveItem = ({ archive, archiveType }) => {
  const renderArchive = () => {
    if (archive) {
      switch (archiveType) {
        case "board":
          return <ArchiveBoard boardArchive={archive} />;
        case "card":
          return <ArchiveCard cardArchive={archive} />;
        case "task":
          return <ArchiveTask taskArchive={archive} />;
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
