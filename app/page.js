
import styles from "./page.module.css";
import SignOut from "@/app/components/SignOut"
import TodoSection from "@/app/components/TodoSection";
import Garden from "@/app/components/Garden";
import ReportBtn from "@/app/components/ReportBtn"
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import {getUserWithTasks} from '@/lib/user'



const Home = async () => {

  const session = await auth();
  if (!session) redirect("/signin")

  const user = await getUserWithTasks(session.user.email)
  var tasks={learning:[], debt:[]}
  user.learningTask ? tasks.learning = user.learningTask : null
  user.debtTask ? tasks.debt=user.debtTask : null


  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Code Garden</h1>
          <p>Hello {session.user?.name}</p>
        </div>
        <div>
        <ReportBtn/>
        <SignOut />
        </div>

      </header>
      <main className={styles.main}>
        <TodoSection tasks={tasks} userId={user.id} />
        <Garden tasks={tasks}/>
      </main>
    </div>
  );
}
export default Home