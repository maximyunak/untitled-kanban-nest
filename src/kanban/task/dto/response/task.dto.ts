import { ApiProperty, ApiResponse } from "@nestjs/swagger";
import type { Task } from "generated/prisma/client";

export class TaskDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  assigneeId: number;

  @ApiProperty({ example: 1 })
  columnId: number;

  @ApiProperty({ example: 'task1' })
  name: string;

  @ApiProperty({ example: 'description' })
  description: string;

  @ApiProperty({ example: '2026-02-04T09:41:06.742Z' })
  deadline: string;

  @ApiProperty({ example: false })
  isCompleted: boolean;

  @ApiProperty({ example: 0 })
  position: number;

  @ApiProperty({ example: 1 })
  creatorId: number;

  @ApiProperty({ example: '2026-02-04T09:41:06.742Z' })
  createdAt: string;

  @ApiProperty({ example: '2026-02-04T09:41:06.742Z' })
  updatedAt: string;
}

export class TaskResponse {
  @ApiProperty({
    type: [TaskDto]
  })
  task: TaskDto
}

export class TasksResponse {
  @ApiProperty({
    type: [TaskDto],
    example: [
      {
        "id": 1,
        "assigneeId": 1,
        "columnId": 1,
        "name": "task1",
        "description": "description",
        "deadline": "2026-02-04T09:41:06.742Z",
        "isCompleted": false,
        "position": 0,
        "creatorId": 1,
        "createdAt": "2026-02-04T09:41:06.742Z",
        "updatedAt": "2026-02-04T09:41:06.742Z"
      }, {
        "id": 1,
        "assigneeId": 1,
        "columnId": 1,
        "name": "task1",
        "description": "description",
        "deadline": "2026-02-04T09:41:06.742Z",
        "isCompleted": false,
        "position": 0,
        "creatorId": 1,
        "createdAt": "2026-02-04T09:41:06.742Z",
        "updatedAt": "2026-02-04T09:41:06.742Z"
      }
    ]
  })
  tasks: TaskDto[]
}