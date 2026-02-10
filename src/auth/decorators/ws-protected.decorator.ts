import { applyDecorators, UseGuards } from '@nestjs/common';
import { WsAuthGuard } from '../guards/ws-auth.guard';

/**
 * Проверяет есть ли аксес токен в headers.
 * Если есть кидает юзера в client.user
 * @returns
 */
export function WsProtected() {
  return applyDecorators(UseGuards(WsAuthGuard));
}
