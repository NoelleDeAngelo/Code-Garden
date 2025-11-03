"use client"

import styles from "./todoSection.module.css";
import Todo from "@/app/components/Todo";
import AddTaskForm from "@/app/components/AddTaskForm";
import { useState, useRef } from 'react';


const ToDoSection = ({ tasks, userId }) => {

  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [taskType, setTaskType]=useState(null)


  function closeForm() {
    setShowAddTaskForm(false);
    setTaskType(null);
  }


  return (
    <div className={styles.card}>
      <section>
        <h2>Tech Debt</h2>
        <button
          onClick={() => {
            setTaskType('debt');
            setShowAddTaskForm(true);
          }}
        >
          Add
        </button>
        {tasks.debt.map((todo) => {
          return <Todo key={todo.id} task={todo} />;
        })}
      </section>

      <section>
        <h2>Learning Tasks</h2>
        <button
          onClick={() => {
            setTaskType("learning");
            setShowAddTaskForm(true);
          }}
        >
          Add
        </button>
        {tasks.learning.map((todo) => {
          return <Todo key={todo.id} task={todo} />;
        })}
      </section>
      {showAddTaskForm && (
        <AddTaskForm type={taskType} userId={ userId} close={closeForm}  />
      )}
    </div>
  );
}

export default ToDoSection;