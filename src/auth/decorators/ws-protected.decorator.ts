import { applyDecorators, UseGuards } from '@nestjs/common';
import { WsAuthGuard } from '../guards/ws-auth.guard';

export function WsProtected() {
  return applyDecorators(UseGuards(WsAuthGuard));
}
