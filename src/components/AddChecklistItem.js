import React, { useState } from "react";

const AddChecklistItem = ({ checklist }) => {
  const [item, setItem] = useState("Add an item.");
  const handleChange = (e) => {
    e.persist(e);
    setItem(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
  };

  console.log("add chklistItem", checklist.id, item);

  return (
    <div className="editing">
      <div style={{ margin: "4px 0" }}>
        <form
          className="description-form"
          style={{ height: "54px" }}
          onSubmit={handleSubmit}
        >
          <textarea
            className="edit-checklist"
            placeholder="Add a more detailed description…"
            type="text"
            name="item"
            onChange={(e) => handleChange(e)}
            value={item.value}
            placeholder="Add an item."
          />
        </form>
      </div>
      <div>
        <button
          className="add-list-btn"
          style={{ paddingLeft: "12px", paddingRight: "12px", margin: "0" }}
          onClick={handleSubmit}
        >
          Add
        </button>
        <button className="close-add-btn" style={{ paddingLeft: "12px" }}>
          ✕
        </button>
      </div>
    </div>
  );
};
export default AddChecklistItem;
