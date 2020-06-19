import React from "react";
import ArchivesList from "../components/ArchivesList";
import { connect } from "react-redux";

const ArchivesPage = ({ boards, cards, tasks }) => {
  console.log(cards);

  const renderAllArchives = () => {
    if (cards && tasks) {
      debugger;

      const archives = [boards, cards, tasks].flat();
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
