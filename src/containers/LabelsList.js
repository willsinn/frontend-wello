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
    const sorted = [];

    if (labels) {
      console.log(labels);

      labels.forEach((label, index) => {
        // console.log(label);

        if (index === 0) {
          sorted.push(label);
        }
        //
      });
    }
    return console.log(sorted);

    // return sorted.map((label) => {
    //   const taskLabel = taskLabels.filter(
    //     (task_label) =>
    //       task_label.task_id === taskId && task_label.label_id === label.id
    //   );
    //   console.log(taskLabel);
    //   return (
    //     <Label
    //       key={label.id}
    //       label={label}
    //       handleEditLabel={handleEditLabel}
    //       handleCreateTaskLabel={handleCreateTaskLabel}
    //       taskLabel={taskLabel}
    //     />
    //   );
    // });
  };
  // const renderLabels = () => {
  //   if (labels) {

  //     return labels.map((label) => {
  //       const taskLabel = taskLabels.filter(
  //         (task_label) =>
  //           task_label.task_id === taskId && task_label.label_id === label.id
  //       );
  //       console.log(taskLabel);
  //       return (
  //         <Label
  //           key={label.id}
  //           label={label}
  //           handleEditLabel={handleEditLabel}
  //           handleCreateTaskLabel={handleCreateTaskLabel}
  //           taskLabel={taskLabel}
  //         />
  //       );
  //     });
  //   }
  // };

  // };
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

// const renderLabels = () => {
//   const sorted = [];
//   // let counter = 0;
//   if (labels) {
//     const orderedLabels = labels.map((label) => {
//       const taskLabel = taskLabels.filter(
//         (task_label) =>
//           task_label.task_id === taskId && task_label.label_id === label.id
//       );
//       return taskLabel[0];
//     });
//     // return console.log("this is ordered-labels", orderedLabels);
//     orderedLabels.forEach((label, index) => {
//       // if (counter ===label.label_id){
//       // }
//       // if (counter < label.label_id){
//       //   sorted.
//       // }
//       console.log(label, index);
//       if (index === 0) {
//         return sorted.push(label);
//       }
//       if (index > 0) {
//         //compare sorted index 0 label_id to current.label_id, if the elem is
//         if (label.label_id === sorted[index - 1].label_id) {
//           return sorted.unshift(label);
//         }
//         if (label.label_id > sorted[index - 1].label_id) {
//           return sorted.push(label);
//         }
//       }
//     });
//   }
//   console.log(sorted);

// return labels.map((label) => {
//   const taskLabel = taskLabels.filter(
//     (task_label) =>
//       task_label.task_id === taskId && task_label.label_id === label.id
//   );
//   console.log(taskLabel);
//   return (
//     <Label
//       key={label.id}
//       label={label}
//       handleEditLabel={handleEditLabel}
//       handleCreateTaskLabel={handleCreateTaskLabel}
//       taskLabel={taskLabel}
//     />
//   );
// });
