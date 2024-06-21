/*
  Warnings:

  - Made the column `lastname` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "lastname" SET NOT NULL;
