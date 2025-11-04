'use server'
import { LearningTask, DebtTask } from "@/lib/tasks";



export async function saveDebtTask(formData) {
  const title = formData.get('name');
  const description = formData.get('description');
  const userId = formData.get('userId');
  const task = new DebtTask(title, description, userId);
  await task.save();
}

export async function saveLearningTask(formData) {
  const title = formData.get("name");
  const description = formData.get("description");
  const userId = formData.get("userId");
  const task = new LearningTask(title, description, userId);
  await task.save();
}

export async function updateIsCompleted(type, id, wasPrevCompleted) {
  type === "learning"
    ? await LearningTask.setIsCompleted(id, wasPrevCompleted)
    : await DebtTask.setIsCompleted(id, wasPrevCompleted);
}

export async function deleteTask(type, id) {
  type === "learning"
    ? await LearningTask.deleteTask(id)
    : await DebtTask.deleteTask(id);
}