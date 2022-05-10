-- CreateTable
CREATE TABLE "PeerReview" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "scoreFirst" INTEGER NOT NULL,
    "scoreSecond" INTEGER NOT NULL,
    "scoreThird" INTEGER NOT NULL,
    "feedbackText" TEXT NOT NULL
);
