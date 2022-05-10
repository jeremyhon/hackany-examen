import type { PeerReview } from "@prisma/client";
import { prisma } from "~/db.server";

export type { PeerReview } from "@prisma/client";

export  function listPeerReviews() {
  return prisma.peerReview.findMany({orderBy: {createdAt: 'desc'}});
}

export  function createPeerReview({
  scoreFirst,
  scoreSecond,
  scoreThird,
  feedbackText
}: Pick<PeerReview, "scoreFirst" | "scoreSecond" | "scoreThird" | "feedbackText">) {
  return prisma.peerReview.create({
    data: {
      scoreFirst,
      scoreSecond,
      scoreThird,
      feedbackText
    },
  });
}
