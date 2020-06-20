import React from "react";
import ArchivesList from "../components/ArchivesList";
import { connect } from "react-redux";

const ArchivesPage = ({ archives }) => {
  const renderArchives = () => {
    if (archives && archives.length > 0) {
      return <ArchivesList archives={archives} />;
    }
  };
  return <div>{renderArchives()}</div>;
};
const mapStateToProps = (state) => {
  return {
    archives: state.archiveReducer.archives,
  };
};
export default connect(mapStateToProps)(ArchivesPage);
