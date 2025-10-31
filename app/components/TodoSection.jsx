"use client"

import styles from "./todoSection.module.css";
import Todo from "@/app/components/Todo";
import {DebtTask, LearningTask} from "@/lib/tasks"


const ToDoSection = ({ todos }) => {
  return (
    <div className={styles.card}>
      <section>
        <h2>Tech Debt</h2>
        <button>Add</button>
        {todos.debt.map((todo) => {
          var task = new DebtTask(
            todo.title,
            todo.description,
            todo.userId
          );
          return <Todo key={todo.id} task={task} />;
        })}
      </section>

      <section>
        <h2>Learning Tasks</h2>
        <button>Add</button>
        {todos.learning.map((todo) => {
          var task = new LearningTask(todo.title, todo.description, todo.userId);
          return <Todo key={todo.id} task={task} />;
        })}
      </section>
    </div>
  );
}

export default ToDoSection;