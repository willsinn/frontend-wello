import React from "react";
import ArchivesList from "../components/ArchivesList";
import { connect } from "react-redux";

const ArchivesPage = () => {
  return (
    <div className="archives-page">
      <div className="board-tiles-section-header">
        <span className="home-section-title">Archives</span>
      </div>
      <ArchivesList />
    </div>
  );
};

export default connect()(ArchivesPage);
