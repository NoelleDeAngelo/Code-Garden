
import styles from "./page.module.css";
import SignOut  from "@/app/components/SignOut"
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";



const Home= async ()=> {
  const session = await auth();
  if (!session) redirect("/signin")

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Code Garden</h1>
        <h2>Hello {session.user?.name}</h2>
        <SignOut/>
      </main>
    </div>
  );
}
export default Home