import React from "react";

const EditBtn = props => {
  const activeBtn = card => {
    return (
      <div className="card-menu-wrap ">
        <input
          onClick={props.toggleClick}
          type="checkbox"
          id="btnControl"
          value={card}
        />
        <label className="card-menu-btn" for="btnControl">
          <span className="btn-text">...</span>
        </label>
      </div>
    );
  };
  const renderActiveOnly = () => {
    if (props.isEditActive) {
      const card = props.card;
      return activeBtn(card);
    } else if (!props.isEditActive && props.card.id === props.editCard.id) {
      const active = props.editCard;
      return activeBtn(active);
    } else {
      return activeBtn(null);
    }
  };

  return <>{renderActiveOnly()}</>;
};
export default EditBtn;
