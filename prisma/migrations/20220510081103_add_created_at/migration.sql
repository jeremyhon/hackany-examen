-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PeerReview" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "scoreFirst" INTEGER NOT NULL,
    "scoreSecond" INTEGER NOT NULL,
    "scoreThird" INTEGER NOT NULL,
    "feedbackText" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_PeerReview" ("feedbackText", "id", "scoreFirst", "scoreSecond", "scoreThird") SELECT "feedbackText", "id", "scoreFirst", "scoreSecond", "scoreThird" FROM "PeerReview";
DROP TABLE "PeerReview";
ALTER TABLE "new_PeerReview" RENAME TO "PeerReview";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
