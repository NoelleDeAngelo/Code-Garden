import styles from "./signin.module.css";
import Link from "next/link";
import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";

const SignIn = async () => {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className={styles.pageContainer}>
      <h1>Code Garden</h1>
      <form
        className={styles.signinForm}
        action={async (formData) => {
          "use server";
          try {
            await signIn("credentials", formData, { redirectTo: "/" });
          } catch (error) {
            if (isRedirectError(error)) {
              throw error;
            } else {
              //todo:handle error on client
              throw new Error('Invalid Credentials')
            }
          }
        }}
      >
        <div className={styles.formRow}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" className={styles.formInput} />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" className={styles.formInput} />
        </div>
        <button type="submit" className={styles.button}>
          Sign In
        </button>
        <span className={styles.signup}>
          Need an account?{" "}
          <Link className={styles.signupLink} href="/register">
            Sign Up
          </Link>
        </span>
      </form>
    </div>
  );
};
export default SignIn;