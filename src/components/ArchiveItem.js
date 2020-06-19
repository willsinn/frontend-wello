import React from "react";
// import { connect } from "react-redux";

const ArchiveItem = ({ archive }) => {
  const renderArchive = () => {
    if (archive) {
      const arch_keys = Object.entries(archive);
      const keys = arch_keys.map((key) => {
        const k = key[0];
        return k;
      });
      if (keys.includes("user_id")) {
        return <div>Archived Board</div>;
      }
      if (keys.includes("board_id")) {
        return <div>Archived Card</div>;
      }
      if (keys.includes("card_id")) {
        return <div>Archived Task</div>;
      }
    }
  };
  return (
    <li>
      <div>{renderArchive()}</div>
    </li>
  );
};

export default ArchiveItem;
