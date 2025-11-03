"use client";

const Todo = ({ task }) => {
  return (
    <div>
      <p>{ task.title}</p>
      <p>{ task.description}</p>
    </div>
  );
}

export default Todo;