import React, { useEffect } from "react";
import withAuth from "../hocs/withAuth";
import PersonalBoardList from "../components/PersonalBoardList";
import StarredBoardList from "../components/StarredBoardList";
import ArchivesPage from "./ArchivesPage";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { fetchUserBoards } from "../actions/boards";
import { setPage } from "../actions/user";
import { setArchives } from "../actions/archives";
import { Redirect } from "react-router-dom";

const HomePage = ({ user, activePage, workspace, boards, dispatch }) => {
  useEffect(() => {
    dispatch(fetchUserBoards(user.id));
  }, [user.id, dispatch]);

  const handleArchivesClick = (e) => {
    if (e) {
      dispatch(setPage("archives"));
    }
  };
  const handleBoardsClick = (e) => {
    if (e) {
      dispatch(setPage("boards"));
    }
  };
  const fetchArchives = () => {
    if (boards && boards.length > 0) {
      dispatch(setArchives({ userBoards: boards }));
    }
  };
  return (
    <div id="root">
      <NavBar />
      {fetchArchives()}

      {workspace && workspace.id ? (
        <Redirect to="/board" />
      ) : (
        <div className="home-page">
          <div style={{ position: "absolute", top: "40px", left: "0px" }}>
            <nav className="archive-boards-menu">
              <div style={{ width: "220px" }}>
                <ul>
                  <li
                    onClick={(e) => handleBoardsClick(e)}
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
                      <span className="archive-boards-menu-link">Boards</span>
                    )}
                  </li>

                  <li
                    onClick={(e) => handleArchivesClick(e)}
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
                      <span className="archive-boards-menu-link">Archives</span>
                    )}
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="home-right-content-container">
            {boards && boards.length > 0 && activePage === "boards" ? (
              <div className="boards-container">
                <div className="boards-section">
                  <StarredBoardList boards={boards} />
                </div>

                <div className="boards-section">
                  <PersonalBoardList boards={boards} />
                </div>
              </div>
            ) : null}
            {activePage === "archives" ? <ArchivesPage /> : null}
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
  };
};
export default withAuth(connect(mapStateToProps)(HomePage));
