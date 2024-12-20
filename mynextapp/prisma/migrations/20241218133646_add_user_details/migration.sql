/*
  Warnings:

  - A unique constraint covering the columns `[mobile]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "lastname" TEXT NOT NULL DEFAULT 'Unknown',
ADD COLUMN     "mobile" TEXT NOT NULL DEFAULT '0000000000',
ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'Unknown';

-- CreateIndex
CREATE UNIQUE INDEX "User_mobile_key" ON "User"("mobile");
