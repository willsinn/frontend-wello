import React, { useState } from "react";

const BoardMenuNavList = () => {
  return (
    <div className="board-menu-content">
      <ul>
        <li>About This Board</li>
        <li>Change Background</li>
        <li>Search Cards</li>
      </ul>
      <div className="board-activity-logs">What you did.</div>
    </div>
  );
};
export default BoardMenuNavList;
