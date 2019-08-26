import React, { useState } from "react";
import MenuBtn from "./MenuBtn";
import CardBtns from "./CardBtns";
import Card from "./Card";
import EditingForm from "./EditingForm";
import { deleteCard } from "../actions/workspace";
import { updateCard } from "../actions/workspace";
import { toggleEdit } from "../actions/workspace";
import { connect } from "react-redux";

const CardItem = props => {
  const [render, setRender] = useState(false);
  const [menu, setMenu] = useState(false);
  const [subject, setSubject] = useState(props.card.subject);

  const renderOptions = card => {
    setRender(!render);
    props.dispatch(toggleEdit());
  };
  const handleDeleteCard = e => {
    if (e) {
      props.dispatch(deleteCard(props.card));
      props.handleDeleteCard(props.card);
    }
  };

  const handleSave = input => {
    props.dispatch(
      updateCard({
        id: props.card.id,
        key: "subject",
        value: input
      }),
      toggleEdit(),
      setSubject(input)
    );
  };
  // const renderMenu = () => (
  //   <div className="card-content">
  //     {value}
  //     <button onClick={handleDeleteCard}>X</button>
  //     <button onClick={clearEdit}>Edit</button>
  //   </div>
  // );
  // const renderEditing = () => {
  //   return (
  //     <>
  //       <button onClick={clearEdit} className="exit-render" name="render">
  //         {" "}
  //       </button>
  //       <EditingForm value={value} handleSave={handleSave} />
  //     </>
  //   );
  // };

  return (
    <div className="card-item">
      <div
        onMouseEnter={e => setMenu(!menu)}
        onMouseLeave={e => setMenu(!menu)}
      >
        {menu ? (
          <div>
            <MenuBtn card={props.card} renderOptions={renderOptions} />
            <Card card={props.card} subject={subject} />
            {render ? <CardBtns /> : null}
          </div>
        ) : (
          <Card card={props.card} subject={subject} />
        )}
      </div>
    </div>
  );
};
const mapStateToProps = ({ workspaceReducer: isEditActive }) => ({
  isEditActive: isEditActive
});
export default connect(mapStateToProps)(CardItem);
