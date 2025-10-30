"use client"
import { signOut } from "next-auth/react";
import styles from "./signOut.module.css";

const SignOut = () => {

  const handleSignOut= async () => {
    await signOut();
  }

  return <button className={styles.button}
    onClick={handleSignOut}
  >Sign Out</button>
}

export default SignOut;