"use client";
import styles from "./report.module.css";
import{useState} from 'react'

const Report = ({ tasks }) => {
  const allTasks= [...tasks.debt, ...tasks.learning]

  const [showingTasks, setShowingTasks] = useState(allTasks);
  const [statusPicked, setStatusPicked] = useState("all");
  const [datePicked, setDatePicked] = useState(null);

  // function handleStatusChange(event) {
  //   const value = event.target.value;
  //   if (value === 'all') {
  //     setShowingTasks(allTasks)
  //   } else if(value==='complete'){
  //     let show = allTasks.filter((task) => task.isCompleted === true)
  //     setShowingTasks(show)
  //   } else if (value==='incomplete') {
  //     let show = allTasks.filter((task) => task.isCompleted === false);
  //     setShowingTasks(show);
  //   }
  // }
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
    console.log(event.target.value == "")
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
    <div>
      <div>
        <select name="status" onChange={handleStatusChange}>
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <label htmlFor="start">Date Created:</label>
        <input name="start" type="date" onChange={handleDateChange}></input>
      </div>

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