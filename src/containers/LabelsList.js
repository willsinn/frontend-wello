import React from "react";
import Label from "./Label";
import TaskWindowLabel from "../components/TaskWindowLabel";
import TaskLabel from "../components/TaskLabel";

const LabelsList = ({
  labels,
  taskLabels,
  taskId,
  winLabels,
  windowLabels,
  windowId,
  tLabels,
  taskedLabels,
  tId,
  handleEditLabel,
  handleCreateTaskLabel,
  openLabelMenu,
}) => {
  const renderLabels = () => {
    if (labels) {
      const sortedLabels = [...labels];
      sortedLabels.sort(function (a, b) {
        return a.color - b.color;
      });
      return sortedLabels.map((label) => {
        const taskLabel = taskLabels.filter(
          (task_label) =>
            task_label.task_id === taskId && task_label.label_id === label.id
        );
        return (
          <Label
            key={label.id}
            label={label}
            handleEditLabel={handleEditLabel}
            handleCreateTaskLabel={handleCreateTaskLabel}
            taskLabel={taskLabel}
          />
        );
      });
    }
  };
  const renderTaskWindowLabels = () => {
    if (winLabels) {
      return winLabels.map((label) => {
        const matchedLabel = windowLabels.filter(
          (windowLabel) =>
            windowLabel.task_id === windowId &&
            windowLabel.label_id === label.id
        );
        if (matchedLabel[0]) {
          return (
            <TaskWindowLabel
              key={`window-label-${label.id}`}
              label={label}
              openLabelMenu={openLabelMenu}
            />
          );
        } else {
          return null;
        }
      });
    }
  };
  const renderTaskedLabels = () => {
    if (tLabels) {
      return tLabels.map((label) => {
        const matchedLabel = taskedLabels.filter(
          (taskedLabel) =>
            taskedLabel.task_id === tId && taskedLabel.label_id === label.id
        );
        if (matchedLabel[0]) {
          return <TaskLabel key={`task-label-${label.id}`} label={label} />;
        } else {
          return null;
        }
      });
    }
  };
  return (
    <>
      <ul className="label-popover-list">{renderLabels()}</ul>
      <ul className="window-labels-list">{renderTaskWindowLabels()}</ul>
      <ul className="task-labels-list">{renderTaskedLabels()}</ul>
    </>
  );
};

export default LabelsList;
