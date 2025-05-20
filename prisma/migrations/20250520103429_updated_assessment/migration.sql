/*
  Warnings:

  - You are about to drop the column `result` on the `Assessment` table. All the data in the column will be lost.
  - Added the required column `answers` to the `Assessment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maturityLevel` to the `Assessment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report` to the `Assessment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Assessment" DROP COLUMN "result",
ADD COLUMN     "answers" JSONB NOT NULL,
ADD COLUMN     "maturityLevel" TEXT NOT NULL,
ADD COLUMN     "report" TEXT NOT NULL,
ALTER COLUMN "score" SET DATA TYPE DOUBLE PRECISION;
