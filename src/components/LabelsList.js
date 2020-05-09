import React from "react";
import Label from "../containers/Label";

const LabelsList = ({
  labels,
  taskLabels,
  handleEditLabel,
  handleCreateTaskLabel,
  taskId,
}) => {
  const renderLabels = () => {
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
  };
  return <ul className="label-popover-list">{renderLabels()}</ul>;
};

export default LabelsList;
