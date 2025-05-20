/*
  Warnings:

  - You are about to drop the column `employeesCount` on the `BusinessInsight` table. All the data in the column will be lost.
  - Added the required column `employeeCount` to the `BusinessInsight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BusinessInsight" DROP COLUMN "employeesCount",
ADD COLUMN     "employeeCount" INTEGER NOT NULL;
