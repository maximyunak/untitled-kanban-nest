import { ApiProperty } from '@nestjs/swagger';
import type { User } from 'generated/prisma/client';

export class UserResponseDto {
  @ApiProperty({
    description: 'User',
    example: {
      id: 8,
      email: 'test@gmail.com',
      firstName: 'Maxim',
      lastName: "Yunak",
      patronymic: "Rodionovich",
      createdAt: '2026-02-04T09:41:06.742Z',
      updatedAt: '2026-02-04T09:41:06.742Z',
    },
  })
  user: User;
}
