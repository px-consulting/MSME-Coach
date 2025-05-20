/*
  Warnings:

  - You are about to drop the column `name` on the `BusinessInsight` table. All the data in the column will be lost.
  - Added the required column `businessName` to the `BusinessInsight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BusinessInsight" DROP COLUMN "name",
ADD COLUMN     "businessName" TEXT NOT NULL;
