import React, { useState } from "react";
import { connect } from "react-redux";

const MenuNavItemAbout = ({ user, workspace, setContent, setSidebar }) => {
  const [desc, setDesc] = useState(workspace.board_desc);
  const [editable, setEditable] = useState(false);
  const handleChange = (e) => {
    e.persist(e);
    setDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      debugger;
      // dispatch(saveTaskDesc(editTask, desc));
      // setEditable(false);
    }
  };
  const handleExitEditable = (e) => {
    setEditable(false);
    setDesc(workspace.board_desc);
  };

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
  console.log(workspace);

  return (
    <div className="board-menu-container">
      <div className="board-menu-sidebar-content">
        <div className="board-menu-header-content">
          <button
            className="board-menu-back-btn"
            onClick={(e) => setContent("")}
          >
            <span className="back-text">←</span>
          </button>
          <h3 className="board-menu-header-title js-board-menu-title-text">
            About This Board
          </h3>
          <button
            className="board-menu-close-btn"
            onClick={(e) => setSidebar(false)}
          >
            <span className="close-text">✕</span>
          </button>
        </div>
        <hr />
        <div className="board-menu-content">
          <ul className="board-menu-nav-list">
            <li className="board-menu-nav-item">
              <span className="norm-item-content">
                <div className="user-profile-icon" />
                <div> Made By </div>
              </span>
            </li>

            <li className="board-menu-nav-item">
              <span className="norm-item-content">
                <div className="about-user-initials">
                  <span className="menu-icon board-menu-nav-btn activity-item">
                    <span className="initials-wrap menu-icon menu-initials">
                      {renderInitials()}
                    </span>
                    <div>{user.name}</div>
                    <div>@{nameSplit[0]}1</div>
                  </span>
                </div>
              </span>
            </li>
            <hr />
            <li className="board-menu-nav-item">
              <span className="norm-item-content">
                <div className="desc-icon" />
                <div style={{ padding: "0" }} className="task-window-desc">
                  <div
                    className="module-header"
                    style={{ margin: "12px 0 12px 28px" }}
                  >
                    <div style={{ display: "flex" }} className="module-title">
                      <span
                        className="desc-icon"
                        style={{ top: "-2px", left: "-32px" }}
                      />
                      <span style={{ fontWeight: "600" }}>Description</span>
                    </div>
                    <div className="editable-desc">
                      {desc && desc.length > 0 && !editable ? (
                        <button
                          className="edit-desc-btn"
                          onClick={(e) => setEditable(true)}
                        >
                          Edit
                        </button>
                      ) : null}
                    </div>
                  </div>

                  {!editable ? (
                    <div
                      className="module-body"
                      onClick={(e) => setEditable(true)}
                    >
                      {desc && desc.length > 0 ? (
                        <p
                          className="curr-desc"
                          onClick={(e) => setEditable(true)}
                        >
                          {desc}
                        </p>
                      ) : (
                        <div
                          style={{
                            fontWeight: "525",
                            width: "100%",
                            margin: "0",
                          }}
                          className="desc-placeholder"
                        >
                          <p>
                            It’s your board’s time to shine! Let people know
                            what this board is used for and what they can expect
                            to see.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="editing">
                      <form
                        className="description-form"
                        onSubmit={handleSubmit}
                      >
                        <textarea
                          className="description-field"
                          type="text"
                          name="desc"
                          value={desc}
                          onChange={(e) => handleChange(e)}
                        />
                      </form>
                      <button
                        className="add-list-btn"
                        style={{
                          paddingLeft: "12px",
                          paddingRight: "12px",
                          margin: "0",
                        }}
                        onClick={handleSubmit}
                      >
                        Save
                      </button>
                      <button
                        className="close-add-btn"
                        onClick={handleExitEditable}
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </div>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    workspace: state.workspaceReducer.workspace,
  };
};

export default connect(mapStateToProps)(MenuNavItemAbout);
