import React from "react";
import ArchivesList from "../components/ArchivesList";
import { connect } from "react-redux";

const ArchivesPage = ({ archives }) => {
  return (
    <div>
      <ArchivesList archives={archives.boards} />
      <ArchivesList archives={archives.cards} />
      <ArchivesList archives={archives.tasks} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    archives: state.archiveReducer.archives,
  };
};
export default connect(mapStateToProps)(ArchivesPage);
