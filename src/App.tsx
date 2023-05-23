import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>{/* <Droppable></Droppable> */}</div>
    </DragDropContext>
  );
}

export default App;
