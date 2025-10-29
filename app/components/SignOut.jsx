"use client"
import { signOut } from "next-auth/react";

const SignOut = () => {

  const handleSignOut= async () => {
    await signOut();
  }

  return <button onClick={handleSignOut}>SignOut</button>
}

export default SignOut;