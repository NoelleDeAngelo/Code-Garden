import { db } from "@/lib/db";

export async function getUserWithTasks(email) {
  return db.user.findFirst({
    where: { email },
    include: { learningTask: true, debtTask: true },
  });
}
