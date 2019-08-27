import React, { useState } from "react";
import MenuBtns from "./MenuBtns";
import CardBtns from "./CardBtns";
import Card from "./Card";
import EditingForm from "./EditingForm";
import { connect } from "react-redux";

const CardItem = props => {
  const [menu, setMenu] = useState(false);

  // const renderOptions = card => {
  //   setRender(!render);
  // };

  //
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
    <div onMouseEnter={e => setMenu(!menu)} onMouseLeave={e => setMenu(!menu)}>
      <div className="card">
        {menu ? <MenuBtns card={props.card} /> : null} {props.card.subject}
      </div>
    </div>
  );
};
const mapStateToProps = ({ workspaceReducer: isEditActive }) => ({
  isEditActive: isEditActive
});
export default connect(mapStateToProps)(CardItem);
// {edit ? (
//   <EditingForm card={props.card} handleSave={handleSave} />
// ) : (
//   <Card card={props.card} subject={subject} />
// )}
// {render ? (
//   <CardBtns card={props.card} handleEdit={handleEdit} />
// ) : null}
