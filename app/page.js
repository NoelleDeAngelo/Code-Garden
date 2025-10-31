
import styles from "./page.module.css";
import SignOut from "@/app/components/SignOut"
import TodoSection from "@/app/components/TodoSection";
import Garden from "@/app/components/Garden";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { db }  from "@/lib/db";



const Home = async () => {

  const session = await auth();
  if (!session) redirect("/signin")

  const user = await db.user.findFirst({
      where: { email: session.user.email },
      include: { learningTask: true, debtTask:true },
    });
  var todos= {learning: user.learningTask, debt: user.debtTask}


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
        <TodoSection todos={todos} />
        <Garden/>
      </main>
    </div>
  );
}
export default Home