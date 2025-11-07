"use client";
import styles from "./report.module.css";
import{useState} from 'react'

//The report component generates a User Task Report that shows a list of the users tasks with the title of the task, the date the task was created, and if applicable the date the task was completed. The report has a search functionality that allows the user to display tasks by completed status and date created.

const Report = ({ tasks }) => {
  const allTasks= [...tasks.debt, ...tasks.learning]

  const [showingTasks, setShowingTasks] = useState(allTasks);
  const [statusPicked, setStatusPicked] = useState("all");
  const [datePicked, setDatePicked] = useState(null);


  function getStatusFilteredList() {
        if (statusPicked === "all") {
          setShowingTasks(allTasks);
        } else if (statusPicked === "complete") {
          let show = allTasks.filter((task) => task.isCompleted === true);
          setShowingTasks(show);
        } else if (statusPicked === "incomplete") {
          let show = allTasks.filter((task) => task.isCompleted === false);
          setShowingTasks(show);
        }
  }

  function handleStatusChange(event) {
    const value = event.target.value
    if (value === "all") {
      setShowingTasks(allTasks);
      setStatusPicked("all");
      getDateFilteredList();
    } else if (value === "complete") {
      let show = allTasks.filter((task) => task.isCompleted === true);
      setShowingTasks(show);
      setStatusPicked("complete");
      getDateFilteredList();
    } else if (value === "incomplete") {
      let show = allTasks.filter((task) => task.isCompleted === false);
      setShowingTasks(show);
      setStatusPicked("incomplete");
      getDateFilteredList();
    }
  }

  function getDateFilteredList() {
    if (datePicked) {
          setShowingTasks((prev) => {
      return prev.filter((task) => {
        return task.createdAt.toISOString().slice(0, 10) === datePicked;
      });
    });
    }

  }

  function handleDateChange(event) {
    getStatusFilteredList();
    if (event.target.value == "") {
      setDatePicked(null)

    } else {
          setDatePicked(event.target.value);
    setShowingTasks((prev) => {
      return prev.filter((task) => {
        return task.createdAt.toISOString().slice(0, 10) === event.target.value;
      })
    })
    }


  }


  return (
    <section className={styles.reportContainer}>
      <div className={styles.filterContainer}>
        <label htmlFor="status">
          {" "}
          Status:
          <select
            id="status"
            className={styles.filter}
            name="status"
            onChange={handleStatusChange}
          >
            <option value="all">All</option>
            <option value="complete">Complete</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </label>
        <label htmlFor="createdDate">
          Date Created:{" "}
          <input
            className={styles.filter}
            id="createdDate"
            name="start"
            type="date"
            onChange={handleDateChange}
          ></input>{" "}
        </label>
      </div>
      {!showingTasks.length ? <p>No Tasks Selected</p> :
        <table className={styles.table}>
          <caption hidden>User Task Report</caption>
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
        </table>}
    </section>
  );
}

export default Report