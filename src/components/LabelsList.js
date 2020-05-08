import React from "react";
import Label from "../containers/Label";

const LabelsList = ({ labels }) => {
  const renderLabels = () => {
    return labels.map((label) => {
      return <Label key={label.id} label={label} />;
    });
  };
  return <ul className="label-popover-list">{renderLabels()}</ul>;
};

export default LabelsList;
