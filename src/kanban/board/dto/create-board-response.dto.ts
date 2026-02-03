import { ApiProperty } from '@nestjs/swagger';
import type { Board } from 'generated/prisma/client';

export class CreateBoardResponse {
  @ApiProperty({
    description: 'Boards',
    example: `{
  "board": {
      "id": 7,
      "name": "board1",
      "description": "great desc",
      "creatorId": 10,
      "createdAt": "2026-02-03T12:44:21.887Z",
      "updatedAt": "2026-02-03T12:44:21.887Z"
  }
}`,
  })
  boards: Board;
}
