/*
  Warnings:

  - You are about to drop the column `publisher` on the `blogs` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `faqs` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `faqs` table. All the data in the column will be lost.
  - Made the column `categoryId` on table `services` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_categoryId_fkey";

-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "publisher",
ADD COLUMN     "published" BOOLEAN DEFAULT true;

-- AlterTable
ALTER TABLE "faqs" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "services" ALTER COLUMN "categoryId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
