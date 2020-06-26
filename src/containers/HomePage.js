import React, { useEffect } from "react";
import withAuth from "../hocs/withAuth";
import PersonalBoardList from "../components/PersonalBoardList";
import StarredBoardList from "../components/StarredBoardList";
import AboutPage from "../components/AboutPage";
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
  const nameSplit = user.name.split(" ");
  const renderInitials = () => {
    let initials = "";
    const nameSplit = user.name.split(" ");
    if (nameSplit) {
      nameSplit.forEach((letter) => {
        const first = letter[0].toUpperCase();
        initials += first;
      });
    }
    if (initials.length === 1) {
      initials += initials;
    }
    if (initials.length > 2) {
      const limit = initials.slice(0, 1);
      initials = limit;
    }
    return initials;
  };
  const handleLinkClick = (e, linkType) => {
    if (e) {
      switch (linkType) {
        case "boards":
          return dispatch(setPage("boards"));
        case "archives":
          return dispatch(setPage("archives"));
        case "about":
          return dispatch(setPage("about"));
        default:
          return;
      }
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
        <div className="home-page-wrap">
          <div className="profile-nicknames">
            <span className="user-initials">{renderInitials()}</span>
            <span className="user-fullname">{user.name}</span>
            <span className="user-handle">@{nameSplit[0]}1</span>
          </div>
          <div className="home-page">
            <div className="home-inner-container">
              <div>
                <nav className="archive-boards-menu">
                  <div style={{ width: "220px" }}>
                    <ul>
                      <li
                        onClick={(e) => handleLinkClick(e, "boards")}
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
                        onClick={(e) => handleLinkClick(e, "archives")}
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
                        onClick={(e) => handleLinkClick(e, "about")}
                        style={{ marginBottom: "4px" }}
                      >
                        {activePage === "about" ? (
                          <span
                            className="archive-boards-menu-link"
                            style={{
                              backgroundColor: "#e4f0f6",
                              color: "#0079bf",
                            }}
                          >
                            About
                          </span>
                        ) : (
                          <span className="archive-boards-menu-link">
                            About
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
                    case "about":
                      return <AboutPage />;
                    default:
                      return null;
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
  };
};
export default withAuth(connect(mapStateToProps)(HomePage));
