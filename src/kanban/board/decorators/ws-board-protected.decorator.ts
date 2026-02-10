import { applyDecorators, UseGuards } from '@nestjs/common';
import { WsBoardAccessGuard } from '../guards/ws-board-access.guard';

/**
 * Проверяет есть ли у пользователя доступ к доске.
 * @returns
 */
export function WsBoardProtected() {
  return applyDecorators(UseGuards(WsBoardAccessGuard));
}
