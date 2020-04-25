import React, { useState } from "react";

const AddChecklistItem = ({ checklist }) => {
  const [item, setItem] = useState(checklist.item);
  const handleChange = (e) => {
    e.persist(e);
    setItem(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
  };

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
            name="desc"
            value={item}
            placeholder="Add an item."
            onChange={(e) => handleChange(e)}
          />
        </form>
      </div>
      <div>
        <button
          className="add-list-btn"
          style={{ paddingLeft: "12px", paddingRight: "12px", margin: "0" }}
          onClick={handleSubmit}
        >
          Save
        </button>
        <button className="close-add-btn" style={{ paddingLeft: "12px" }}>
          ✕
        </button>
      </div>
    </div>
  );
};
export default AddChecklistItem;
