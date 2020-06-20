import React from "react";
import ArchiveItem from "./ArchiveItem";

const ArchivesList = ({ archives }) => {
  const renderArchived = () => {
    return archives.map((archive) => {
      let archiveType;

      if (archive !== undefined) {
        if (archive.user_id) {
          archiveType = (
            <ArchiveItem
              key={`${archiveType}-${archive.id}`}
              archive={archive}
              archiveType={"board"}
            />
          );
        }
        if (archive.board_id) {
          archiveType = (
            <ArchiveItem
              key={`${archiveType}-${archive.id}`}
              archive={archive}
              archiveType={"card"}
            />
          );
        }
        if (archive.card_id) {
          archiveType = (
            <ArchiveItem
              key={`${archiveType}-${archive.id}`}
              archive={archive}
              archiveType={"card"}
            />
          );
        }
      }
      return archiveType;
    });
  };
  return <ul className="archive-list">{renderArchived()}</ul>;
};

export default ArchivesList;
