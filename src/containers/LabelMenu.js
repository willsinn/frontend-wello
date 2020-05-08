import React from "react";
import LabelsList from "../components/LabelsList";
import { connect } from "react-redux";

const LabelMenu = ({ labels, closePopup }) => {
  return (
    <div className="label-menu side-popover">
      <div className="no-back">
        <div className="side-popover-header">
          <span className="side-popover-header-title">Labels</span>
          <button onClick={(e) => closePopup()} className="side-close-btn">
            ✕
          </button>
        </div>
        <div className="side-popover-body">
          <LabelsList labels={labels} />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { labels: state.labelsReducer.labels };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(LabelMenu);
