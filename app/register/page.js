import styles from "./register.module.css";
import Link from "next/link";
import { redirect } from "next/navigation";
import signUp from "@/lib/reg"
import { auth, signIn } from "@/lib/auth";

export default async function Register() {

  const session = await auth();
  if (session) redirect("/");


  return (
    <div className={styles.pageContainer}>
      <h1>Register Here</h1>
      <form
        className={styles.registrationForm}
        action={async (formData) => {
          "use server";
          let success = false;
          if (formData.get("password") === formData.get("confirmPassword")) {
            const res = await signUp(formData);
            success = res.success;
          } else {
            //todo:handle password mismatch on client
          }
          if (success) {
            await signIn("credentials", formData, { redirectTo: "/" });
          } else {
            //todo:handle signup error on client
          }
        }}
      >
        <div className={styles.formRow}>
          <label htmlFor="name">Name:</label>
          <input
            required
            type="text"
            name="name"
            className={styles.formInput}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="email">Email:</label>
          <input
            required
            type="email"
            name="email"
            className={styles.formInput}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="password">Password:</label>
          <input
            required
            type="password"
            name="password"
            className={styles.formInput}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            required
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
          <Link className={styles.signinLink} href="/signin">
            Sign In
          </Link>
        </span>
      </form>
    </div>
  );
}
