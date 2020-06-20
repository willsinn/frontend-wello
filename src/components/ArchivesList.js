import React from "react";
import ArchiveItem from "./ArchiveItem";

const ArchivesList = ({ archives }) => {
  const renderArchived = () => {
    return archives.map((archive) => {
      let archiveType;
      if (archive === undefined) {
        return null;
      }
      if (archive.user_id) {
        archiveType = "board";
      }
      if (archive.board_id) {
        archiveType = "card";
      }
      if (archive.card_id) {
        archiveType = "task";
      }
      return (
        <ArchiveItem
          key={`${archiveType}-${archive.id}`}
          archive={archive}
          archiveType={archiveType}
        />
      );
    });
  };
  return <ul className="archive-list">{renderArchived()}</ul>;
};

export default ArchivesList;
