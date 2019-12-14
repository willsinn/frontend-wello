import React, { useState } from "react";
import CreateMenu from "../components/CreateMenu";
import Notifications from "../components/Notifications";
import SidebarList from "../components/SidebarList";
import HomeBtn from "../components/HomeBtn";
import { connect } from "react-redux";
import { setTrue, setFalse, setNull } from "../actions/user";

const NavBar = (props, { dispatch }) => {
  const [sidebar, setSidebar] = useState(false);
  const notActive = () => {
    if (props.isActive === null) {
      return null;
    } else {
      return props.isActive ? <Notifications /> : <CreateMenu />;
    }
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
        {notActive()}
        <div className="mid-nav-title">
          <div className="nav-icon" />
          <div className="app-name"> Wello</div>
        </div>
        <div className="right-navbar">
          <button
            className="navbar-btn"
            onClick={
              props.isActive === false
                ? e => props.dispatch(setNull(e))
                : e => props.dispatch(setFalse(e))
            }
          >
            +
          </button>
          <button
            className="navbar-btn"
            onClick={
              props.isActive === true
                ? e => props.dispatch(setNull(e))
                : e => props.dispatch(setTrue(e))
            }
          >
            <div className="not-icon" />
            <div />
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
