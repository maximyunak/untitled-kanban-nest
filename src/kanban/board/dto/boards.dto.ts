import { ApiProperty } from '@nestjs/swagger';
import type { Board } from 'generated/prisma/client';

export class BoardsResponse {
  @ApiProperty({
    description: 'Boards',
    example: [
      {
        id: 8,
        name: 'board1',
        description: 'great desc',
        creatorId: 15,
        createdAt: '2026-02-04T09:41:06.742Z',
        updatedAt: '2026-02-04T09:41:06.742Z',
      },
      {
        id: 9,
        name: 'board1',
        description: 'great desc',
        creatorId: 15,
        createdAt: '2026-02-04T10:26:55.082Z',
        updatedAt: '2026-02-04T10:26:55.082Z',
      },
    ],
  })
  boards: Board[];
}
