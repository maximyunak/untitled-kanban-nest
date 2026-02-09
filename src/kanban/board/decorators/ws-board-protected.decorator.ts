import { applyDecorators, UseGuards } from '@nestjs/common';
import { WsBoardAccessGuard } from '../guards/ws-board-access.guard';

export function WsBoardProtected() {
  return applyDecorators(UseGuards(WsBoardAccessGuard));
}
