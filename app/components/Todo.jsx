"use client";
import styles from "./todo.module.css";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdDeleteForever,
} from "react-icons/md";
import { useState } from 'react'
import { updateIsCompleted} from "@/app/services/tasks.server.js";


const Todo = ({ task , type}) => {

  const [isDone, setIsDone] = useState(task.isCompleted);

  function handleCheckBox() {
    updateIsCompleted(type, task.id, isDone);
    setIsDone((prev) => !prev);

  }
  return (
    <li className={styles.todoContainer}>


        <div className={styles.todoHeadingContainer}>
                {isDone ? (
        <MdCheckBox onClick={handleCheckBox} className={styles.checkbox} />
      ) : (
        <MdCheckBoxOutlineBlank
          onClick={handleCheckBox}
          className={styles.checkbox}
        />
      )}
          <h3 className={styles.todoTitle}>{task.title}</h3>
          <MdDeleteForever className={styles.trash} />
        </div>

        <p className={styles.description}>{task.description}</p>


    </li>
  );
}

export default Todo;