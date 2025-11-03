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

export async function createDebtTask(params) {
  const task = new DebtTask(title, description, userId);
  return task
}

export async function createLearningTask(params) {
  const task = new LearningTask(title, description, userId);
  return task
}