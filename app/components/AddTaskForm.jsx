import styles from "./addTaskForm.module.css";
import { saveDebtTask, saveLearningTask } from "@/app/services/tasks.server.js";
import { useRouter } from "next/navigation";

const AddTaskForm = ({ close, type, userId, update }) => {
  const router = useRouter();

  async function handleSave(formData) {
    if (type === 'debt') {
      await saveDebtTask(formData)
      close()
      router.push('/')
    } else if (type === 'learning') {
      await saveLearningTask(formData)
      close()
      router.push("/");
    } else {
      throw new Error('Not a task type')
    }
  }

  return (
    <div className={styles.blurBg}>
      <div className={styles.card}>
        <span onClick={close} className={styles.close}>
          X
        </span>
        <form className={styles.form} action={handleSave}>
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
            <label className={styles.label} htmlFor="description">
              Description:
            </label>
            <textarea
              name="description"
              placeholder="What is this task about"
              className={`${styles.formInput} ${styles.textarea}`}
            />
          </div>
          <button type="submit" className={styles.button}>
            Save
          </button>
          <input type="hidden" name="userId" value={userId}></input>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
