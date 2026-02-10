import { applyDecorators, UseGuards } from '@nestjs/common';
import { BoardAccessGuard } from '../guards/board-access.guard';

/**
 * Проверяет есть ли у пользователя доступ к доске.
 */
export function BoardProtected() {
  return applyDecorators(UseGuards(BoardAccessGuard));
}
