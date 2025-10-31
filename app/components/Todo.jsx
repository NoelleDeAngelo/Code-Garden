"use client";

const Todo = ({ task }) => {
  return (
    <div>
      <p>{ task.getTitle()}</p>
      <p>{ task.getDescription()}</p>
    </div>
  );
}

export default Todo;