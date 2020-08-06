import React, {useState} from "react";
import Column from "./column";
import { DragDropContext } from "react-beautiful-dnd";
// import initData from "./init-data";
import Modal from '../modal/Modal'
import { useDispatch, useSelector } from "react-redux";

const DragModel = () => {
  // const [value, /* setValue */] = useState(initData);
  const dispatch = useDispatch();
  const boards = useSelector((state)=>(state))

  const onDragEnd = (result) => {
  //   const {destination, source, droppableId } = result;
  //   if(!destination) {
  //     return;
  //   }
  //   if(destination.droppableId === source.droppableId &&
  //     destination.index === source.index) {
  //       return;
  //     }
  //     const column = value.columns[source.droppableId];
  //     const newTaskIds = Array.from(column.taskId);
  //     newTaskIds.splice(source.index, 1);
  //     newTaskIds.splice(destination.index, 0, droppableId);
  //   const newColumn = {
  //     ...column,
  //     taskId: newTaskIds,
  //   };
  //   const newState = {
  //     ...value,
  //     columns: {
  //       ...value.columns,
  //       [newColumn.id]: newColumn,
  //     },
  //   };
  //   setValue(newState);
  };

  return (
    
    <DragDropContext onDragEnd={onDragEnd}>
      <Modal />
      {boards.column0order.map((columnId) => {
        const column = boards.columns[columnId];
        const tasks = column.taskId.map((task) =>boards.todos[task]);
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  )
};

export default DragModel;
