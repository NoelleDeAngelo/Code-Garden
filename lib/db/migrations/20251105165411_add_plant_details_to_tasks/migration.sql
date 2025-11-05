/*
  Warnings:

  - Added the required column `iconName` to the `debtTask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iconXLoc` to the `debtTask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iconYLoc` to the `debtTask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iconName` to the `learningTask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iconXLoc` to the `learningTask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iconYLoc` to the `learningTask` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_debtTask" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" DATETIME,
    "iconName" TEXT NOT NULL,
    "iconXLoc" TEXT NOT NULL,
    "iconYLoc" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "debtTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_debtTask" ("completedAt", "createdAt", "description", "id", "isCompleted", "title", "userId") SELECT "completedAt", "createdAt", "description", "id", "isCompleted", "title", "userId" FROM "debtTask";
DROP TABLE "debtTask";
ALTER TABLE "new_debtTask" RENAME TO "debtTask";
CREATE TABLE "new_learningTask" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" DATETIME,
    "iconName" TEXT NOT NULL,
    "iconXLoc" TEXT NOT NULL,
    "iconYLoc" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "learningTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_learningTask" ("completedAt", "createdAt", "description", "id", "isCompleted", "title", "userId") SELECT "completedAt", "createdAt", "description", "id", "isCompleted", "title", "userId" FROM "learningTask";
DROP TABLE "learningTask";
ALTER TABLE "new_learningTask" RENAME TO "learningTask";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
