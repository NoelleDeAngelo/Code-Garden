
import styles from "./page.module.css";
import SignOut from "@/app/components/SignOut"
import TodoSection from "@/app/components/TodoSection";
import Garden from "@/app/components/Garden";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";



const Home= async ()=> {
  const session = await auth();
  if (!session) redirect("/signin")

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Code Garden</h1>
          <p>Hello {session.user?.name}</p>
        </div>
        <SignOut />
      </header>
      <main className={styles.main}>
        <TodoSection />
        <Garden/>
      </main>
    </div>
  );
}
export default Home