import React, { useState } from "react";
import PlusDropdown from "../components/PlusDropdown";
import NoteDropdown from "../components/NoteDropdown";
import ProfileDropdown from "../components/ProfileDropdown";
import SideBoardList from "../components/SideBoardList";
import HomeBtn from "../components/HomeBtn";
import AddBoardModal from "../components/AddBoardModal";

const NavBar = props => {
  const [sidebar, setSidebar] = useState(false);
  const [rightnav, setRightnav] = useState("");
  const [modal, setModal] = useState(false);

  const closeRightnav = e => {
    setRightnav("");
  };
  const closeLeftnav = e => {
    setSidebar(false);
  };
  const closeModal = e => {
    setModal(false);
  };
  const openModal = e => {
    setRightnav("");
    setModal(true);
  };
  return (
    <div className="nav-wrap">
      <div id="navbar">
        <div className="left-navbar">
          <HomeBtn close={closeRightnav} />
          <button className="navbar-btn" onClick={e => setSidebar(!sidebar)}>
            <span className="nav-icon" />
          </button>
        </div>

        {!sidebar ? null : <SideBoardList close={closeLeftnav} />}
        {(() => {
          switch (rightnav) {
            case "create":
              return (
                <PlusDropdown
                  closeRightnav={closeRightnav}
                  openModal={openModal}
                />
              );
            case "noti":
              return <NoteDropdown closeRightnav={closeRightnav} />;
            case "prof":
              return <ProfileDropdown closeRightnav={closeRightnav} />;
            default:
              return null;
          }
        })()}

        <AddBoardModal modal={modal} closeModal={closeModal} />

        <div className="mid-nav-title">
          <div className="nav-icon" />
          <div className="app-name"> Wello</div>
        </div>
        <div className="right-navbar">
          <button className="navbar-btn" onClick={e => setRightnav("create")}>
            <img
              className="icon"
              src={require("../images/add-new-icon.png")}
              alt="create"
              opacity="1"
            />
          </button>
          <button className="navbar-btn" onClick={e => setRightnav("noti")}>
            <img
              className="icon"
              src={require("../images/notify-icon.png")}
              alt="noti"
              opacity="1"
            />
          </button>
          <div onClick={e => setRightnav("prof")}>
            <span
              className="user-initials"
              style={{
                height: "32px",
                width: "32px",
                lineHeight: "32px",
                fontSize: "14px",
                margin: "0"
              }}
            >
              WS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
