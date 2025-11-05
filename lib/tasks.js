
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

  pickPlant(plantOptions) {
    const plant = {};
    const randomIndex = Math.floor(Math.random() * plantOptions.length);
    plant.name = plantOptions[randomIndex];
    let yPos = Math.random() * (55 + 40) - 40;
    yPos += "%";
    plant.y = yPos;
    let xPos = Math.random() * (89 + 3) - 3;
    xPos += "%";
    plant.x = xPos;
    return plant;
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


//-----Debt Tasks-----

export class DebtTask extends Task {

  static WEEDS= ["GreenWeed.png", "PurpleWeed.png"];

  async save() {
    const weed = this.pickPlant(DebtTask.WEEDS);
    return db.debtTask.create({
      data: {
        title: this.getTitle(),
        description: this.getDescription(),
        iconName: weed.name,
        iconXLoc: weed.x,
        iconYLoc: weed.y,
        user: { connect: { id: this.getUserId() } },
      },
    });
  }
  static async setIsCompleted(id, wasPrevCompleted) {
    var data;
    wasPrevCompleted
      ? (data = { isCompleted: false, completedAt: null })
      : (data = { isCompleted: true, completedAt: new Date() });
    await db.debtTask.update({
      where: { id: id },
      data: data,
    });
  }

  static async deleteTask(id) {
    await db.debtTask.delete({
      where: { id: id },
    });
  }
}


//-----Learning Tasks -----

export class LearningTask extends Task {

  static FLOWERS = ["RedFlower.png", "BlueFlower.png"];

  async save() {
    const flower=this.pickPlant(LearningTask.FLOWERS)
    return db.learningTask.create({
      data: {
        title: this.getTitle(),
        description: this.getDescription(),
        user: { connect: { id: this.getUserId() } },
        iconName: flower.name,
        iconXLoc: flower.x,
        iconYLoc: flower.y,
      },
    });
  }


  static async setIsCompleted(id, wasPrevCompleted) {
    var data;
    wasPrevCompleted
      ? (data = { isCompleted: false, completedAt: null })
      : (data = { isCompleted: true, completedAt: new Date() });
    await db.learningTask.update({
      where: { id: id },
      data: data,
    });
  }

  static async deleteTask(id) {
    await db.learningTask.delete({
      where: { id: id },
    });
  }
}
