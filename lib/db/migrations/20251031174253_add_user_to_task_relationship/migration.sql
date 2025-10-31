/*
  Warnings:

  - You are about to drop the `learingTask` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `completed_at` on the `debtTask` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `debtTask` table. All the data in the column will be lost.
  - You are about to drop the column `is_completed` on the `debtTask` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `debtTask` table. All the data in the column will be lost.
  - Added the required column `userId` to the `debtTask` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "learingTask";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "learningTask" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" DATETIME,
    "userId" TEXT NOT NULL,
    CONSTRAINT "learningTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_debtTask" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" DATETIME,
    "userId" TEXT NOT NULL,
    CONSTRAINT "debtTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_debtTask" ("description", "id", "title") SELECT "description", "id", "title" FROM "debtTask";
DROP TABLE "debtTask";
ALTER TABLE "new_debtTask" RENAME TO "debtTask";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
