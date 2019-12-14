import React, { useState } from "react";
import CreateMenu from "../components/CreateMenu";
import Notifications from "../components/Notifications";
import ProfileMenu from "../components/ProfileMenu";
import SidebarList from "../components/SidebarList";
import HomeBtn from "../components/HomeBtn";
import { connect } from "react-redux";
import { setTrue, setFalse, setNull } from "../actions/user";

const NavBar = (props, { dispatch }) => {
  const [sidebar, setSidebar] = useState(false);
  const [rightnav, setRightnav] = useState("");
  const closeRightnav = e => {
    setRightnav("");
  };

  return (
    <div className="nav-wrap">
      <div id="navbar">
        <div className="left-navbar">
          <HomeBtn />
          <button className="navbar-btn" onClick={e => setSidebar(!sidebar)}>
            Boards
          </button>
        </div>
        {!sidebar ? null : <SidebarList />}
        {(() => {
          switch (rightnav) {
            case "create":
              return <CreateMenu close={closeRightnav} />;
            case "noti":
              return <Notifications close={closeRightnav} />;
            case "prof":
              return <ProfileMenu close={closeRightnav} />;
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
            +
          </button>
          <button className="navbar-btn" onClick={e => setRightnav("noti")}>
            <div className="not-icon" />
            <div />
          </button>
          <button className="navbar-btn" onClick={e => setRightnav("prof")}>
            <div className="prof-icon">W.S.</div>
          </button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ userReducer: isActive }) => ({
  isActive: isActive.isActive
});

export default connect(mapStateToProps)(NavBar);
