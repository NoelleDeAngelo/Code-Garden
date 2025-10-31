
import styles from "./todoSection.module.css";
import Todo from "@/app/components/Todo";


const ToDoSection = ({ todos }) => {
  return (
    <div className={styles.card}>
      {todos.map(todo => { return <Todo key={ todo.id} todo={todo } />})}
    </div>
  )
}

export default ToDoSection;