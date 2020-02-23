import React, { useState } from "react";
import PlusDropdown from "../components/PlusDropdown";
import NoteDropdown from "../components/NoteDropdown";
import ProfileDropdown from "../components/ProfileDropdown";
import SidebarList from "../components/SidebarList";
import HomeBtn from "../components/HomeBtn";

const NavBar = props => {
  const [sidebar, setSidebar] = useState(false);
  const [rightnav, setRightnav] = useState("");
  const closeRightnav = e => {
    setRightnav("");
  };
  const closeLeftnav = e => {
    setSidebar(false);
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

        {!sidebar ? null : <SidebarList close={closeLeftnav} />}

        {(() => {
          switch (rightnav) {
            case "create":
              return <PlusDropdown closeRightnav={closeRightnav} />;
            case "noti":
              return <NoteDropdown closeRightnav={closeRightnav} />;
            case "prof":
              return <ProfileDropdown closeRightnav={closeRightnav} />;
            default:
              return null;
          }
        })()}

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
