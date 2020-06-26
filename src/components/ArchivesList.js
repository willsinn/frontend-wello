import React from "react";
import ArchiveItemBoard from "./ArchiveItemBoard";
import ArchiveItemCard from "./ArchiveItemCard";
import ArchiveItemTask from "./ArchiveItemTask";
import { connect } from "react-redux";

const ArchivesList = ({ archives }) => {
  const renderArchived = () => {
    if (archives.length > 0) {
      const archArr = [];
      archives.forEach((a) => {
        if (a) {
          const aItem = Object.keys(a);
          if (aItem.includes("user_id")) {
            archArr.push("board");
          }
          if (aItem.includes("board_id")) {
            archArr.push("card");
          }
          if (aItem.includes("card_id")) {
            archArr.push("task");
          }
          return null;
        }
      });

      return archives.map((archive, i) => {
        if (archive) {
          const elemType = archArr[i];
          const aKey = `${archArr[i]}-${archive.id}`;

          switch (elemType) {
            case "board":
              return <ArchiveItemBoard key={aKey} boardArchive={archive} />;
            case "card":
              return <ArchiveItemCard key={aKey} cardArchive={archive} />;
            case "task":
              return <ArchiveItemTask key={aKey} taskArchive={archive} />;
            default:
              return console.log("ERROR: FAILING ARCHIVE RENDER!");
          }
        }
        return null;
      });
    }
  };

  return <ul className="archive-list">{renderArchived()}</ul>;
};
const mapStateToProps = (state) => {
  return {
    archives: state.archiveReducer.archives,
  };
};
export default connect(mapStateToProps)(ArchivesList);
