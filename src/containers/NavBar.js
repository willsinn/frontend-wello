import React from "react";
import NewProjectForm from "./NewProjectForm";
import SidebarList from "../components/SidebarList";
import HomeBtn from "../components/HomeBtn";
import { connect } from "react-redux";
import { setTrue, setFalse, setNull } from "../actions/user";

const NavBar = (props, { dispatch }) => {
  const notActive = () => {
    if (props.isActive === null) {
      return null;
    } else {
      return props.isActive ? <SidebarList /> : <NewProjectForm />;
    }
  };
  return (
    <div id="navbar">
      <div className="left-navbar">
        <HomeBtn />
        <button
          className="navbar-btn"
          onClick={
            props.isActive
              ? e => props.dispatch(setNull(e))
              : e => props.dispatch(setTrue(e))
          }
        >
          Boards
        </button>
        <span className="app-name">Wello</span>
      </div>
      {notActive()}
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
      </div>
    </div>
  );
};
const mapStateToProps = ({ userReducer: isActive }) => ({
  isActive: isActive.isActive
});

export default connect(mapStateToProps)(NavBar);
