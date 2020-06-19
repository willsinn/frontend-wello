import React from "react";
import ArchiveItem from "./ArchiveItem";

const ArchivesList = ({ archives }) => {
  console.log(archives);
  const renderArchived = () => {
    if (archives.length > 0) {
      return archives.map((archive) => (
        <ArchiveItem key={archive.id} archive={archive} />
      ));
    }
  };
  return <ul>{renderArchived()}</ul>;
};

export default ArchivesList;
