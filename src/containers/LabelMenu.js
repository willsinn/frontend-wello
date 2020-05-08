import React from "react";
import { connect } from "react-redux";

const LabelMenu = ({ labels, closePopup }) => {
  console.log(labels);
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
          <ul className="label-popover-list">
            <li className="label-popover-list-item">
              <span className="task-label-green task-label">
                <p>text</p>
              </span>
              <div className="name-label-btn-container">
                <button className="name-label-btn">✐</button>
              </div>
            </li>

            <li className="label-popover-list-item">
              <span className="task-label-yellow task-label">
                <p>text</p>
              </span>
              <div className="name-label-btn-container">
                <button className="name-label-btn">✐</button>
              </div>
            </li>

            <li className="label-popover-list-item">
              <span className="task-label-orange task-label">
                <p>text</p>
              </span>
              <div className="name-label-btn-container">
                <button className="name-label-btn">✐</button>
              </div>
            </li>

            <li className="label-popover-list-item">
              <span className="task-label-red task-label">
                <p>text</p>
              </span>
              <div className="name-label-btn-container">
                <button className="name-label-btn">✐</button>
              </div>
            </li>

            <li className="label-popover-list-item">
              <span className="task-label-purple task-label">
                <p>text</p>
              </span>
              <div className="name-label-btn-container">
                <button className="name-label-btn">✐</button>
              </div>
            </li>

            <li className="label-popover-list-item">
              <span className="task-label-blue task-label">
                <p>text</p>
              </span>
              <div className="name-label-btn-container">
                <button className="name-label-btn">✐</button>
              </div>
            </li>
          </ul>
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
