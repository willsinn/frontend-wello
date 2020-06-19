import React from "react";
import ArchivesList from "../components/ArchivesList";
import { connect } from "react-redux";

const ArchivesPage = ({ boards, cards, tasks }) => {
  const renderAllArchives = () => {
    if (boards && cards && tasks) {
      let arr = [boards, cards, tasks];
      const archives = arr.flat();

      return <ArchivesList archives={archives} />;
    }
  };
  return <div>{renderAllArchives()}</div>;
};
const mapStateToProps = (state) => {
  return {
    boards: state.archiveReducer.archives.boards,
    cards: state.archiveReducer.archives.cards,
    tasks: state.archiveReducer.archives.tasks,
  };
};
export default connect(mapStateToProps)(ArchivesPage);
