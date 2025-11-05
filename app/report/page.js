import { auth } from "@/lib/auth";
import { getUserWithTasks } from '@/lib/user'
import styles from "./reportPage.module.css";
import Report from "@/app/components/Report";

export default async function ReportPage() {

  const session = await auth();
  if (!session) redirect("/signin");

  const user = await (getUserWithTasks(session.user.email))
  var tasks = { learning: [], debt: [] };
  user.learningTask ? (tasks.learning = user.learningTask) : null;
  user.debtTask ? (tasks.debt = user.debtTask) : null;
  return (
    <div>
      <h1>Report Page</h1>
      <Report tasks={ tasks}/>
    </div>
  )
}