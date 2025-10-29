import styles from "./signin.module.css";
import Link from "next/link";

export default function Register() {
  return (
    <div className={styles.pageContainer}>
      <h1>Code Garden</h1>
      <form className={styles.signinForm}>
        <div className={styles.formRow}>
          <label for="email">Email:</label>
          <input type="email" name="email" className={styles.formInput} />
        </div>
        <div className={styles.formRow}>
          <label for="password">Password:</label>
          <input type="password" name="password" className={styles.formInput} />
        </div>
        <button type="submit" className={styles.button}>
          Sign In
        </button>
        <span className={styles.signup}>
          Need an account?{" "}
          <Link className={styles.signupLink}  href="/register">
            Sign Up
          </Link>
        </span>
      </form>
    </div>
  );
}
