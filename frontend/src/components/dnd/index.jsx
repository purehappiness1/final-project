import React, { useState } from "react";
import Column from "./column";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import initData from "./init-data";
import Modal from "../modal/Modal";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

class DragModel extends React.Component {
  state = initData;

  onDragStart = () => {
    document.body.style.color = "orange";
    document.body.style.transition = "background-color 0.2s ease";
  };

  onDragUpdate = (update) => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(this.state.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  };

  onDragEnd = (result) => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";

    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }


    if(type === 'column') {
      const newColumnOrder = Array.from(this.state.column0order);
      newColumnOrder.splice(source.index, 1)
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        column0order: newColumnOrder,
      };
      this.setState(newState);
      return;
    }


    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskId);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskId: newTaskIds,
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };
      this.setState(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskId);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskId: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskId);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskId: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <Modal />
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {(provided) => (
            <Container
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {this.state.column0order.map((columnId, index) => {
                const column = this.state.columns[columnId];
                const tasks = column.taskId.map(
                  (task) => this.state.tasks[task]
                );
                return <Column key={column.id} column={column} tasks={tasks} index={index} />;
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default DragModel;
