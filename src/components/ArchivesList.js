import React from "react";
import BoardArchiveItem from "./BoardArchiveItem";

const ArchivesList = ({ archives }) => {
  const renderArchived = () => {
    if (archives.length > 0) {
      const archArr = [];

      archives.forEach((a) => {
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
      });
      return archives.map((archive, i) => {
        const elemType = archArr[i];
        debugger;
        switch (elemType) {
          case "board":
            const aKey = `${elemType}-${archive.id}`;
            return (
              <BoardArchiveItem
                key={aKey}
                boardArchive={archive}
                archiveType={elemType}
              />
            );
          case "card":
            return;
          case "task":
            return;
          default:
            return console.log("ERROR: FAILING ARCHIVE RENDER!");
        }
      });

      // return archives.map((archive) => {
      //   if (archive.user_id) {
      //    renderArchive.push(<li className="archives-list-item">

      //    <ArchiveItem
      //      key={`board-${archive.id}`}
      //      archive={archive}
      //      archiveType={"board"}
      //    />
      //    </li>)

      //   }
      //   if (archive.board_id) {
      //     const renderArchive = (
      //       <li className="archives-list-item">

      //       <ArchiveItem
      //         key={`$card-${archive.id}`}
      //         archive={archive}
      //         archiveType={"card"}
      //       />
      //     );
      //     return renderArchive;
      //   }
      //   if (archive.card_id) {
      //     const renderArchive = (    <li className="archives-list-item">

      //       <ArchiveItem
      //         key={`$task-${archive.id}`}
      //         archive={archive}
      //         archiveType={"task"}
      //       /><
      //     );
      //     return renderArchive;}
      // }
      // });
    }
  };
  return <ul className="archive-list">{renderArchived()}</ul>;
};

export default ArchivesList;
