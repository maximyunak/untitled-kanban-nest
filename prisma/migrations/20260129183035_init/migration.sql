/*
  Warnings:

  - You are about to drop the column `expires_at` on the `user_token` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user_token` DROP COLUMN `expires_at`;
