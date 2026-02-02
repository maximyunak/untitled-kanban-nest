import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../guards/auth.guard';

export function Protected() {
  return applyDecorators(UseGuards(JwtGuard));
}
