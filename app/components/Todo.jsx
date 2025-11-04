"use client";
import styles from "./todo.module.css";


const Todo = ({ task }) => {
  return (
    <li className={styles.todoContainer}>
      <div className={styles.info}>
        <h3 className={styles.todoTitle}>{ task.title}</h3>
        <p>{ task.description}</p>
      </div>

    </li>
  );
}

export default Todo;