import React from "react";
import ArchiveItem from "./ArchiveItem";

const ArchivesList = ({ archives }) => {
  const renderArchived = () => {
    if (archives.length > 0) {
      let archiveType;

      return archives.map((archive) => {
        if (archive.user_id) {
          archiveType = "board";
        } else if (archive.board_id) {
          archiveType = "card";
        } else {
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
    }
  };
  return <ul>{renderArchived()}</ul>;
};

export default ArchivesList;
