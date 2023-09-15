/*
  Warnings:

  - The `lat` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `long` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "lat",
ADD COLUMN     "lat" DOUBLE PRECISION,
DROP COLUMN "long",
ADD COLUMN     "long" DOUBLE PRECISION;
