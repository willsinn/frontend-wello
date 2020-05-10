import React from "react";
import Label from "../containers/Label";
import TaskWindowLabel from "./TaskWindowLabel";

const LabelsList = ({
  labels,
  taskLabels,
  taskWindowLabels,
  handleEditLabel,
  handleCreateTaskLabel,
  taskId,
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
    if (taskWindowLabels) {
      return taskWindowLabels.map((taskWindowLabel) => {
        return <TaskWindowLabel taskWindowLabel={taskWindowLabel} />;
      });
    }
  };
  return (
    <>
      <ul className="label-popover-list">{renderLabels()}</ul>
      <ul>{renderTaskWindowLabels()}</ul>
    </>
  );
};

export default LabelsList;
