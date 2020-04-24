import React, { useState } from "react";

const AddChecklist = () => {
  return (
    <div className="add-checklist">
      <form className="add-checklist-form">
        <label for="id-checklist">Title</label>
        <input className="add-checklist-input" />
        <button className="checklist-btn add-list-btn">Add</button>
      </form>
    </div>
  );
};

export default AddChecklist;
