import { ApiProperty } from '@nestjs/swagger';
import type { Board } from 'generated/prisma/client';
import { CreateBoardDto } from './create-board.dto';

export class BoardResponse {
  @ApiProperty({
    description: 'Boards',
    example: {
      id: 25,
      name: 'board1',
      description: 'great desc',
      creatorId: 15,
      createdAt: '2026-02-16T11:49:48.974Z',
      updatedAt: '2026-02-16T11:49:48.974Z',
    },
  })
  board: Board;
}
