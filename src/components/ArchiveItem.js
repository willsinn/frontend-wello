import React from "react";
// import { connect } from "react-redux";

const ArchiveItem = ({ archive, archiveType }) => {
  const renderArchive = () => {
    if (archive) {
      switch (archiveType) {
        case "board":
          return (
            <div>
              <span>
                Board <span>{`${archive.title}`}</span>, Cardlists(
                {`${archive.cards.length}`})
              </span>
            </div>
          );
        case "card":
          return (
            <div>
              <span>
                Card <span>{`${archive.goal}`}</span>, Tasks(
                {`${archive.tasks.length}`})
              </span>
            </div>
          );
        case "task":
          return (
            <div>
              <span>
                Task <span>{`${archive.note}`}</span>
              </span>
            </div>
          );
        default:
          return;
      }
    }
    // if (keys.includes("user_id")) {

    // }
    // if (keys.includes("board_id")) {
    //   return <div>Archived Card</div>;
    // }
    // if (keys.includes("card_id")) {
    //   return <div>Archived Task</div>;
    // }
  };
  return (
    <li>
      <div>{renderArchive()}</div>
    </li>
  );
};

export default ArchiveItem;
