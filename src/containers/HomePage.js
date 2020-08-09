import React, { useEffect } from "react";
import withAuth from "../hocs/withAuth";
import PersonalBoardList from "../components/PersonalBoardList";
import StarredBoardList from "../components/StarredBoardList";
import SettingsPage from "../components/SettingsPage";
import ArchivesPage from "./ArchivesPage";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { fetchUserBoards } from "../actions/boards";
import { setPage } from "../actions/user";
import { setArchives } from "../actions/archives";
import { Redirect } from "react-router-dom";
import { newUserLabel } from "../actions/labels";
import { fetchLabels, fetchTaskLabels } from "../actions/labels";

const defaultLabels = ["green", "yellow", "orange", "red", "purple", "blue"];
const HomePage = ({
  user,
  activePage,
  workspace,
  boards,
  labels,
  dispatch,
}) => {
  useEffect(() => {
    dispatch(fetchUserBoards(user.id));
    dispatch(fetchLabels(user.id));
    dispatch(fetchTaskLabels());
  }, [user.id, dispatch]);
  const archivedBoards = boards.filter((b) => b.archived);
  const fetchArchives = () => {
    if (boards && boards.length > 0)
      dispatch(setArchives({ userBoards: archivedBoards }));

    // if (labels && labels.length > 0) debugger;
    // defaultLabels.forEach((labelColor) =>
    //   dispatch(newUserLabel({ userId: user.id, color: labelColor }))
    // );
  };
  console.log(labels);
  return (
    <div id="root">
      <NavBar />
      {fetchArchives()}
      {workspace && workspace.id ? (
        <Redirect to="/board" />
      ) : (
        <div className="home-page-wrap">
          <div className="home-page">
            <div className="home-inner-container">
              <div>
                <nav className="archive-boards-menu">
                  <div style={{ width: "220px" }}>
                    <ul>
                      <li
                        onClick={(e) => dispatch(setPage("boards"))}
                        style={{ marginBottom: "4px" }}
                      >
                        {activePage === "boards" ? (
                          <span
                            className="archive-boards-menu-link"
                            style={{
                              backgroundColor: "#e4f0f6",
                              color: "#0079bf",
                            }}
                          >
                            Boards
                          </span>
                        ) : (
                          <span className="archive-boards-menu-link">
                            Boards
                          </span>
                        )}
                      </li>

                      <li
                        onClick={(e) => dispatch(setPage("archives"))}
                        style={{ marginBottom: "4px" }}
                      >
                        {activePage === "archives" ? (
                          <span
                            className="archive-boards-menu-link"
                            style={{
                              backgroundColor: "#e4f0f6",
                              color: "#0079bf",
                            }}
                          >
                            Archives
                          </span>
                        ) : (
                          <span className="archive-boards-menu-link">
                            Archives
                          </span>
                        )}
                      </li>

                      <li
                        onClick={(e) => dispatch(setPage("settings"))}
                        style={{ marginBottom: "4px" }}
                      >
                        {activePage === "settings" ? (
                          <span
                            className="archive-boards-menu-link"
                            style={{
                              backgroundColor: "#e4f0f6",
                              color: "#0079bf",
                            }}
                          >
                            Settings
                          </span>
                        ) : (
                          <span className="archive-boards-menu-link">
                            Settings
                          </span>
                        )}
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="home-right-content-container">
                {(() => {
                  switch (activePage) {
                    case "boards":
                      return (
                        <div className="boards-container">
                          <div className="boards-section">
                            <StarredBoardList boards={boards} />
                          </div>
                          <div className="boards-section">
                            <PersonalBoardList boards={boards} />
                          </div>
                        </div>
                      );
                    case "archives":
                      return <ArchivesPage />;
                    case "settings":
                      return <SettingsPage />;
                    default:
                      return;
                  }
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    activePage: state.userReducer.activePage,
    workspace: state.workspaceReducer.workspace,
    boards: state.boardsReducer.boards,
    labels: state.labelsReducer.labels,
  };
};
export default withAuth(connect(mapStateToProps)(HomePage));
