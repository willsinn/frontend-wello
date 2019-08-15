import React from "react";
import NewCardForm from "./NewCardForm";
import { connect } from "react-redux";
import { toggleCardForm } from "../actions/workspace";

const AddCardItem = (props, { dispatch }) => {
  console.log(props.showingForm);
  return (
    <div className="add-card">
      {!props.showingForm ? (
        <button
          onClick={() => props.dispatch(toggleCardForm())}
          className="toggle-add-form"
        >
          {" "}
          + Add Card Task{" "}
        </button>
      ) : (
        <NewCardForm />
      )}
    </div>
  );
};
const mapStateToProps = ({ workspaceReducer: workspace }) => ({
  showingForm: workspace.showingForm
});
export default connect(mapStateToProps)(AddCardItem);
