import styles from "./register.module.css";
import Link from "next/link";
import { redirect } from "next/navigation";
import signUp from "@/lib/reg"
import { auth, signIn } from "@/lib/auth";
import FormError from "@/app/components/FormError";

// The registration form includes validation to ensure all fields are filled out, that the email matches the expected format, and that confirm password matches password.

export default async function Register({searchParams}) {

  const session = await auth();
  if (session) redirect("/");


  const params = await searchParams;
  const errorMessage = params?.error === "mismatch" ? "Passwords must match" : null;


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
            redirect("/register?error=mismatch");
          }
          if (success) {
            await signIn("credentials", formData, { redirectTo: "/" });
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
        {errorMessage && <FormError message={errorMessage} />}
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
