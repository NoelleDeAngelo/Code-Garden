"use client"

import styles from "./todoSection.module.css";
import Todo from "@/app/components/Todo";
import AddTaskForm from "@/app/components/AddTaskForm";
import { useState, useRef } from 'react';
import { MdAddCircleOutline } from "react-icons/md";


const ToDoSection = ({ tasks, userId }) => {

  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [taskType, setTaskType]=useState(null)


  function closeForm() {
    setShowAddTaskForm(false);
    setTaskType(null);
  }


  return (
    <div className={styles.card}>
      <section className={styles.sectionContainer}>
        <div className={styles.headingContainer}>
          <h2>Tech Debt</h2>
          <MdAddCircleOutline
            className={styles.button}
            onClick={() => {
              setTaskType("debt");
              setShowAddTaskForm(true);
            }}
          />
        </div>
        <ul>
          {tasks.debt.map((todo) => {
            return <Todo key={todo.id} task={todo} type='debt' />;
          })}
        </ul>
      </section>

      <section className={styles.sectionContainer}>
        <div className={styles.headingContainer}>
          <h2>Learning Goal</h2>
          <MdAddCircleOutline
            className={styles.button}
            onClick={() => {
              setTaskType("learning");
              setShowAddTaskForm(true);
            }}
          />
        </div>
        <ul>
          {tasks.learning.map((todo) => {
            return <Todo key={todo.id} task={todo} type='learning'/>;
          })}
        </ul>
      </section>
      {showAddTaskForm && (
        <AddTaskForm type={taskType} userId={userId} close={closeForm} />
      )}
    </div>
  );
}

export default ToDoSection;