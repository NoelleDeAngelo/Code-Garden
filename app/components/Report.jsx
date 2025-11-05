"use client";
import styles from "./report.module.css";
import{useState} from 'react'

const Report = ({ tasks }) => {
  const allTasks= [...tasks.debt, ...tasks.learning]

  const [showingTasks, setShowingTasks]=useState(allTasks)

  function handleStatusChange(event) {
    const value = event.target.value;
    if (value === 'all') {
      setShowingTasks(allTasks)
    } else if(value==='complete'){
      let show = allTasks.filter((task) => task.isCompleted === true)
      setShowingTasks(show)
    } else if (value==='incomplete') {
      let show = allTasks.filter((task) => task.isCompleted === false);
      setShowingTasks(show);
    }
  }



  return (
    <div>
      <select name="status" onChange={handleStatusChange}>
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Created</th>
            <th>Completed </th>
          </tr>
        </thead>
        <tbody>
          {showingTasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.createdAt.toDateString()}</td>
                <td>
                  {task.completedAt
                    ? task.completedAt.toDateString()
                    : "Incomplete"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Report