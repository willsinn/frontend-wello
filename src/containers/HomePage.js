import React, { useState } from "react";
import withAuth from "../hocs/withAuth";
import PersonalBoardList from "../components/PersonalBoardList";
import StarredBoardList from "../components/StarredBoardList";
import ArchivesPage from "./ArchivesPage";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { fetchUserBoards } from "../actions/boards";
import { Redirect } from "react-router-dom";

const HomePage = ({ user, workspace, boards, dispatch }) => {
  const [active, setActive] = useState("boards");
  const renderBoards = () => {
    dispatch(fetchUserBoards(user.id));
  };

  return (
    <div id="root">
      <NavBar />
      {workspace && workspace.id ? (
        <Redirect to="/board" />
      ) : (
        <div className="home-page">
          <div style={{ position: "absolute", top: "40px", left: "0px" }}>
            <nav className="archive-boards-menu">
              <div style={{ width: "220px" }}>
                <ul>
                  <li
                    onClick={(e) => setActive("boards")}
                    style={{ marginBottom: "4px" }}
                  >
                    {active === "boards" ? (
                      <a
                        href
                        className="archive-boards-menu-link"
                        style={{ backgroundColor: "#e4f0f6", color: "#0079bf" }}
                      >
                        Boards
                      </a>
                    ) : (
                      <a href className="archive-boards-menu-link">
                        Boards
                      </a>
                    )}
                  </li>

                  <li
                    onClick={(e) => setActive("archives")}
                    style={{ marginBottom: "4px" }}
                  >
                    {active === "archives" ? (
                      <a
                        href
                        className="archive-boards-menu-link"
                        style={{ backgroundColor: "#e4f0f6", color: "#0079bf" }}
                      >
                        Archives
                      </a>
                    ) : (
                      <a href className="archive-boards-menu-link">
                        Archives
                      </a>
                    )}
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {renderBoards()}

          <div className="home-right-content-container">
            {active === "boards" ? (
              <div className="boards-container">
                <div className="boards-section">
                  <StarredBoardList />
                </div>

                <div className="boards-section">
                  <PersonalBoardList />
                </div>
              </div>
            ) : (
              <ArchivesPage boards={boards} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    workspace: state.workspaceReducer.workspace,
    boards: state.boardsReducer.boards,
  };
};
export default withAuth(connect(mapStateToProps)(HomePage));
