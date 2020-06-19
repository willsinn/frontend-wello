import React from "react";
import { connect } from "react-redux";

const ArchivesList = ({ archives }) => {
  //   console.log(archives);
  const renderArchived = () => {
    return archives.map((archive) => {
      return <li>Archive Item</li>;
    });
  };
  return <ul>{renderArchived()}</ul>;
};

export default ArchivesList;
