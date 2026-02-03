import { ApiProperty } from '@nestjs/swagger';
import { Board } from 'generated/prisma/client';

export class BoardResponse {
  @ApiProperty({
    description: 'Boards',
    example: `{
    "boards": [
        {
            "id": 5,
            "name": "board1",
            "description": "great desc",
            "creatorId": 10,
            "createdAt": "2026-02-03T12:15:10.186Z",
            "updatedAt": "2026-02-03T12:15:10.186Z"
        },
        {
            "id": 6,
            "name": "board1",
            "description": "great desc",
            "creatorId": 10,
            "createdAt": "2026-02-03T12:20:06.325Z",
            "updatedAt": "2026-02-03T12:20:06.325Z"
        }
    ]
}`,
  })
  boards: Board[];
}
