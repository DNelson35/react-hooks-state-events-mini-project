import React from "react";
import Task from "./Task";

function TaskList({ handleDelete, newTaskList }) {
  const tasksList = newTaskList.map(task => {
    return(
      <Task key={task.text} {...task} handleDelete={handleDelete}></Task>
    )
  })
  return (
    <div className="tasks">
      {tasksList}
    </div>
  );
}

export default TaskList;
