import React from "react";
// import { connect } from "react-redux";

const ArchiveItem = ({ archive, archiveType }) => {
  console.log(archive);

  const renderArchive = () => {
    if (archive) {
      switch (archiveType) {
        case "board":
          return (
            <div className="archive-item-content straight-row-content">
              <div className="straight-row-content a-left">
                <span className="archive-item-info">Board</span>
                <span className="archive-item-info archive-title-text">{`${archive.title}`}</span>
                {archive.cards.length > 0 ? (
                  <div className="straight-row-content a-left">
                    <div>
                      <span className="open-info-btn">⌃</span>
                    </div>
                    <span className="archive-item-info">cards</span>
                  </div>
                ) : null}
              </div>

              <div className="straight-row-content a-right">
                <span className="archive-title-info">
                  {archive.date_archived}
                </span>
                <div className="restore-archived">
                  <button>
                    <span className="restore-btn-text">restore</span>
                  </button>
                </div>
              </div>
            </div>
          );
        case "card":
          return (
            <div className="archive-item-content straight-row-content">
              <div className="straight-row-content">
                <span className="archive-item-info">Card named</span>
                <span className="archive-item-info archive-title-text">{`${archive.goal}`}</span>
                {archive.tasks.length > 0 ? (
                  <div className="straight-row-content">
                    <div>
                      <span className="open-info-btn">⌃</span>
                    </div>
                    <span className="archive-item-info">tasks</span>
                  </div>
                ) : null}
              </div>

              <div className="straight-row-content a-right">
                <span className="archive-item-info">
                  {archive.date_archived}
                </span>
                <div className="restore-archived">
                  <button>
                    <span className="restore-btn-text">restore</span>
                  </button>
                </div>
              </div>
            </div>
          );
        case "task":
          return (
            <div className="archive-item-content straight-row-content">
              <div className="straight-row-content">
                <div>
                  <span className="archive-item-info">Task noted</span>
                  <span className="archive-item-info archive-title-text">{`${archive.note}`}</span>
                </div>
              </div>
              <div className="straight-row-content a-right">
                <span className="archive-title-info">
                  {archive.date_archived}
                </span>
                <div className="restore-archived">
                  <button>
                    <span className="restore-btn-text">restore</span>
                  </button>
                </div>
              </div>
            </div>
          );
        default:
          return (
            <div className="archive-item-content">
              You don't have any archives.
            </div>
          );
      }
    }
  };
  return (
    <li className="archives-list-item">
      <div className="archive-item">{renderArchive()}</div>
    </li>
  );
};

export default ArchiveItem;
