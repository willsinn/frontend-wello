import React from "react";
import Label from "../containers/Label";
import TaskWindowLabel from "./TaskWindowLabel";

const LabelsList = ({
  labels,
  taskLabels,
  taskId,
  winLabels,
  windowLabels,
  windowId,
  handleEditLabel,
  handleCreateTaskLabel,
}) => {
  const renderLabels = () => {
    if (labels) {
      return labels.map((label) => {
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
            <TaskWindowLabel key={`window-label${label.id}`} label={label} />
          );
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
    </>
  );
};

export default LabelsList;
