
import { db } from "@/lib/db";

class Task {
  #title;
  #description;
  #userId;
  constructor(title, description, userId) {
    this.#title = title;
    this.#description = description;
    this.#userId = userId;
  }

  getTitle() {
    return this.#title;
  }
  setTitle(nTitle) {
    this.#title = nTitle;
  }

  getDescription() {
    return this.#description;
  }
  setDescription(ndescription) {
    this.#description = ndescription;
  }

  getUserId() {
    return this.#userId;
  }
  setUserId(nUserId) {
    this.#userId = nUserId;
  }
}

export class DebtTask extends Task {

  async save() {
    return db.debtTask.create({
      data: {
        title: this.getTitle(),
        description: this.getDescription(),
        user: { connect: { id: this.getUserId() } },
      },
    });
  }
}

export class LearningTask extends Task {

  async save() {
    return db.learningTask.create({
      data: {
        title: this.getTitle(),
        description: this.getDescription(),
        user: { connect: { id: this.getUserId() } },
      },
    });
  }
}
