import React, { useState } from "react";

import { connect } from "react-redux";

const EditChecklistItem = (props) => {
  return <div className="editing-checklist-item">Editing</div>;
};

export default connect()(EditChecklistItem);
