import React from "react";

const ChecklistItem = ({ item }) => {
  console.log("c", item);

  return <div className="checklist-item">{item.item}</div>;
};

export default ChecklistItem;
