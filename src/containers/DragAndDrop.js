import React, { useState } from "react";
import CardList from "../components/CardList";
import { setCurrentDroppable } from "../actions/workspace";
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// fake data generator
// const getItems = (count, offset) => {
//   Array.from({ length: count }, (v, k) => k).map((k) => ({
//     id: `card-${k + offset}-${new Date().getTime()}`,
//     content: `card ${k + offset}`,
//   }));
// };
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
// };

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
});
// const boardDragspace = document.getElementById("board");

const DragAndDrop = ({ board_id, cards, isDragging }) => {
  // const half = Math.floor(cards.length / 2);
  // console.log(half);

  // const [state, setState] = useState([cards, cards.slice(half)]);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    // if (sInd === dInd) {
    //   const items = reorder(state[sInd], source.index, destination.index);
    //   const newState = [...state];
    //   newState[sInd] = items;
    //   setState(newState);
    // } else {
    //   const result = move(state[sInd], state[dInd], source, destination);
    //   const newState = [...state];
    //   newState[sInd] = result[sInd];
    //   newState[dInd] = result[dInd];

    //   setState(newState.filter((group) => group.length));
    // }
  }
  const renderDroppableLists = () => ({});
  return (
    <div>
      <div style={{ display: "flex" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {cards.map((workspace, ind) => (
            <Droppable key={ind} droppableId={`${workspace.id}`}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  {cards.map((card, index) => (
                    <Draggable
                      key={card.id}
                      draggableId={`${card.id}`}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                            }}
                          >
                            {card.content}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  board_id: state.workspaceReducer.workspace.id,
  cards: state.workspaceReducer.cards,
  isDragging: state.workspaceReducer.isDragging,
});
export default connect(mapStateToProps)(DragAndDrop);
