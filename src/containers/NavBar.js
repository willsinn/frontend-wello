import React, { useState } from "react";
import PlusDropdown from "../components/PlusDropdown";
import ProfileDropdown from "../components/ProfileDropdown";
import SideDropdownList from "../components/SideDropdownList";
import AddBoardModal from "../components/AddBoardModal";
import { connect } from "react-redux";

const NavBar = ({ user }) => {
  const [sidelist, setSidelist] = useState(false);
  const [rightnav, setRightnav] = useState("");
  const [modal, setModal] = useState(false);

  const closeRightnav = (e) => {
    setRightnav("");
  };
  const closeSidelist = (e) => {
    setSidelist(false);
  };
  const closeModal = (e) => {
    setModal(false);
  };
  const openModal = (e) => {
    setRightnav("");
    setModal(true);
  };
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
  return (
    <div id="navbar">
      <div className="left-navbar">
        <a href="/" className="navbar-btn" style={{ textDecoration: "none" }}>
          <i className="fa fa-home" aria-hidden="true"></i>
        </a>
        <button className="navbar-btn" onClick={(e) => setSidelist(!sidelist)}>
          <span className="wello-icon-white" />
        </button>
      </div>

      {!sidelist ? null : (
        <SideDropdownList
          sidelist={sidelist}
          closeSidelist={closeSidelist}
          openModal={openModal}
        />
      )}
      {(() => {
        switch (rightnav) {
          case "create":
            return (
              <PlusDropdown
                closeRightnav={closeRightnav}
                openModal={openModal}
              />
            );
          case "prof":
            return <ProfileDropdown closeRightnav={closeRightnav} />;
          default:
            return null;
        }
      })()}

      <AddBoardModal modal={modal} closeModal={closeModal} />

      <div className="mid-nav-title">
        <div className="wello-icon-white" />
        <div className="app-name"> Wello</div>
      </div>
      <div className="right-navbar">
        <button className="navbar-btn" onClick={(e) => setRightnav("create")}>
          <div className="nav-btn-text">✕</div>
        </button>

        <div onClick={(e) => setRightnav("prof")}>
          <span
            className="user-initials"
            style={{
              height: "32px",
              width: "32px",
              lineHeight: "32px",
              fontSize: "14px",
              margin: "0",
            }}
          >
            {renderInitials()}
          </span>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};
export default connect(mapStateToProps)(NavBar);
