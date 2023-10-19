/*
  Warnings:

  - You are about to drop the column `published` on the `blogs` table. All the data in the column will be lost.
  - Added the required column `publisher` to the `blogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `faqs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_categoryId_fkey";

-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "published",
ADD COLUMN     "publisher" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "faqs" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "services" ALTER COLUMN "categoryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
