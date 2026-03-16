/*
  Warnings:

  - A unique constraint covering the columns `[yandex_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `yandex_id` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_yandex_id_key` ON `users`(`yandex_id`);
