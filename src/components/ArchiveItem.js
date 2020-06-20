import React from "react";
// import { connect } from "react-redux";

const ArchiveItem = ({ archive, archiveType }) => {
  console.log(archive);

  const renderArchive = () => {
    if (archive) {
      switch (archiveType) {
        case "board":
          return (
            <div>
              <span>
                Board titled
                <span className="archive-title-text">{`${archive.title}`}</span>
              </span>
              <span>{archive.date_archived}</span>
            </div>
          );
        case "card":
          return (
            <div>
              <span>
                Card named
                <span className="archive-title-text">{`${archive.goal}`}</span>
              </span>
              <span>{archive.date_archived}</span>
            </div>
          );
        case "task":
          return (
            <div>
              <span>
                Task noted
                <span className="archive-title-text">{`${archive.note}`}</span>
              </span>
              <span>{archive.date_archived}</span>
            </div>
          );
        default:
          return <div>You don't have any archives.</div>;
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
    <li className="archive-item">
      <div>{renderArchive()}</div>
    </li>
  );
};

export default ArchiveItem;
