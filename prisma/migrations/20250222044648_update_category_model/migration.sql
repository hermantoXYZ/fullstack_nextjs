/*
  Warnings:

  - You are about to drop the column `slug` on the `category` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slugs]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slugs` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Category_slug_key` ON `category`;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `slug`,
    ADD COLUMN `slugs` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Category_slugs_key` ON `Category`(`slugs`);
