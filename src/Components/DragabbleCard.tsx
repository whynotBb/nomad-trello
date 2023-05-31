import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
  background-color: ${(props) =>
    props.isDragging ? "#74b9ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0,0,0,.05)" : null};
`;

interface IDragabbleCardProps {
  toDoId: number;
  toDoText: any; //수정필요
  index: number;
}
function DragabbleCard({ index, toDoId, toDoText }: IDragabbleCardProps) {
  console.log("index", index);
  console.log("toDoId", toDoId);
  console.log("toDoText", toDoText);

  return (
    <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText.toDo}
          {/* {toDoId} */}
        </Card>
      )}
    </Draggable>
  );
}
export default React.memo(DragabbleCard);
//memo => props가 바뀌지 않는다면 랜더링 하지 말아줘!
// -> props가 바뀐 아이템만 랜더링 해줘
// 어디에나 쓸 필요는 없다. 불필요한 랜더링이 많은 컴포넌트에만 최적화를 위해 사용
