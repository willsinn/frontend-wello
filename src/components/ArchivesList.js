import React from "react";
import BoardArchiveItem from "./BoardArchiveItem";
import CardArchiveItem from "./CardArchiveItem";
import TaskArchiveItem from "./TaskArchiveItem";

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
              return (
                <BoardArchiveItem
                  key={aKey}
                  archiveType={elemType}
                  boardArchive={archive}
                />
              );
            case "card":
              return (
                <CardArchiveItem
                  key={aKey}
                  archiveType={elemType}
                  cardArchive={archive}
                />
              );
            case "task":
              return (
                <TaskArchiveItem
                  key={aKey}
                  archiveType={elemType}
                  taskArchive={archive}
                />
              );
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

export default ArchivesList;
