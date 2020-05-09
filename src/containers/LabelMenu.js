import React, { useState } from "react";
import LabelsList from "../components/LabelsList";
import { editLabelName, createTaskLabel } from "../actions/labels";
import { connect } from "react-redux";

const LabelMenu = ({ labels, taskLabels, closePopup, taskId, dispatch }) => {
  const [name, setName] = useState("");
  const [editingLabel, setEditingLabel] = useState({});
  const handleEditLabel = (label) => {
    setEditingLabel(label);
    if (label.name === null) {
      setName("");
    } else {
      setName(label.name);
    }
  };
  const handleBackClick = () => {
    setEditingLabel({});
  };
  const handleChange = (e) => {
    e.persist(e);
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(editLabelName(editingLabel, name));
      setEditingLabel({});
    }
  };
  const handleCreateTaskLabel = (labelId) => {
    dispatch(createTaskLabel(labelId, taskId));
  };
  console.log(taskLabels);

  return (
    <>
      {!editingLabel.id ? (
        <div className="label-menu side-popover">
          <div className="no-back">
            <div className="side-popover-header">
              <span className="side-popover-header-title">Labels</span>
              <button onClick={(e) => closePopup()} className="side-close-btn">
                ✕
              </button>
            </div>
            <div className="side-popover-body">
              <LabelsList
                labels={labels}
                taskLabels={taskLabels}
                handleEditLabel={handleEditLabel}
                handleCreateTaskLabel={handleCreateTaskLabel}
                taskId={taskId}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="edit-label-name label-menu side-popover">
          <div className="no-back">
            <div className="side-popover-header">
              <button
                onClick={(e) => handleBackClick()}
                className="side-back-btn side-close-btn"
              >
                ⌃
              </button>
              <span className="side-popover-header-title">Change Label</span>
              <button onClick={(e) => closePopup()} className="side-close-btn">
                ✕
              </button>
            </div>
            <div className="side-popover-body">
              <div className="editing-label">
                <div style={{ margin: "4px 0" }}>
                  <label className="id-checklist">Name</label>
                  <form
                    className="description-form"
                    style={{ height: "62px" }}
                    onSubmit={handleSubmit}
                  >
                    <input
                      className="label-input add-card-input"
                      type="text"
                      name="name"
                      onChange={(e) => handleChange(e)}
                      value={name}
                      placeholder="Add label name."
                    />
                  </form>
                </div>
                <div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    labels: state.labelsReducer.labels,
    taskLabels: state.labelsReducer.taskLabels,
  };
};

export default connect(mapStateToProps)(LabelMenu);
