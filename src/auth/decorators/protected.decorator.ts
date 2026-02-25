import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../guards';

export function Protected() {
  return applyDecorators(UseGuards(JwtGuard));
}
