import styles from "./addTaskForm.module.css";

const AddTaskForm = ({close}) => {
  return (
    <div className={styles.blurBg}>
      <div className={styles.card}>
        <span onClick={ close} className={styles.close}>X</span>
        <form className={styles.form}>
          <div className={styles.formRow}>
            <input
              required
              type="text"
              name="name"
              placeholder="Write a task name"
              className={`${styles.formInput} ${styles.taskName}`}
            />
          </div>
          <div className={styles.formRow}>
            <label className={styles.label} htmlFor="description">Description:</label>
            <textarea
              name="description"
              placeholder="What is this task about"
              className={`${styles.formInput} ${styles.textarea}`}
            />
          </div>
          <button type='submit' className={styles.button}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
