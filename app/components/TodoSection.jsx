"use client"

import styles from "./todoSection.module.css";
import Todo from "@/app/components/Todo";
import AddTaskForm from "@/app/components/AddTaskForm";
import { DebtTask, LearningTask } from "@/lib/tasks"
import { useState } from 'react';


const ToDoSection = ({ todos }) => {

  const [showAddTaskForm, setShowAddTaskForm] = useState(false);


  return (
    <div className={styles.card}>
      <section>
        <h2>Tech Debt</h2>
        <button onClick={() => setShowAddTaskForm(true)}>Add</button>
        {todos.debt.map((todo) => {
          var task = new DebtTask(todo.title, todo.description, todo.userId);
          return <Todo key={todo.id} task={task} />;
        })}
      </section>

      <section>
        <h2>Learning Tasks</h2>
        <button onClick={() => setShowAddTaskForm(true)}>Add</button>
        {todos.learning.map((todo) => {
          var task = new LearningTask(
            todo.title,
            todo.description,
            todo.userId
          );
          return <Todo key={todo.id} task={task} />;
        })}
      </section>
      {showAddTaskForm && <AddTaskForm close={()=>setShowAddTaskForm(false)} />}
    </div>
  );
}

export default ToDoSection;