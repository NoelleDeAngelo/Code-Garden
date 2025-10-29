import styles from "./register.module.css";
import Link from "next/link";

export default function Register() {
  return (
    <div className={styles.pageContainer}>
      <h1>Register Here</h1>
      <form className={styles.registrationForm}>
        <div className={styles.formRow}>
          <label for="name">Name:</label>
          <input type="text" name="name" className={styles.formInput} />
        </div>
        <div className={styles.formRow}>
          <label for="email">Email:</label>
          <input type="email" name="email" className={styles.formInput} />
        </div>
        <div className={styles.formRow}>
          <label for="password">Password:</label>
          <input type="password" name="password" className={styles.formInput} />
        </div>
        <div className={styles.formRow}>
          <label for="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            className={styles.formInput}
          />
        </div>
        <button type="submit" className={styles.button}>
          Register
        </button>
        <span className={styles.signin}>
          Already have an account?{" "}
          <Link className={styles.signinLink}  href="/signin">
            Sign In
          </Link>
        </span>
      </form>
    </div>
  );
}
