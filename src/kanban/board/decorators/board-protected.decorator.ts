import { applyDecorators, UseGuards } from '@nestjs/common';
import { BoardAccessGuard } from '../guards/board-access.guard';

export function BoardProtected() {
  return applyDecorators(UseGuards(BoardAccessGuard));
}
