/*
  Warnings:

  - You are about to drop the `BusinessInsights` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BusinessInsights" DROP CONSTRAINT "BusinessInsights_userId_fkey";

-- DropTable
DROP TABLE "BusinessInsights";

-- CreateTable
CREATE TABLE "BusinessInsight" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "subSegment" TEXT NOT NULL,
    "businessModel" TEXT NOT NULL,
    "customerType" TEXT NOT NULL,
    "annualRevenue" TEXT NOT NULL,
    "employeesCount" INTEGER NOT NULL,
    "topProducts" TEXT[],
    "marketType" TEXT NOT NULL,
    "businessChallenges" TEXT[],
    "desirability" JSONB,
    "feasibility" JSONB,
    "viability" JSONB,

    CONSTRAINT "BusinessInsight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BusinessInsight_userId_key" ON "BusinessInsight"("userId");

-- AddForeignKey
ALTER TABLE "BusinessInsight" ADD CONSTRAINT "BusinessInsight_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
