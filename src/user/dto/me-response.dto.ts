import { ApiProperty } from '@nestjs/swagger';

class BoardDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'test board' })
  name: string;

  @ApiProperty({ example: 'description' })
  description: string;

  @ApiProperty({ example: 1 })
  creatorId: number;

  @ApiProperty({ example: '2026-02-04T09:41:06.742Z' })
  createdAt: string;

  @ApiProperty({ example: '2026-02-04T09:41:06.742Z' })
  updatedAt: string;
}

class AssigneeTaskDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  assigneeId: number;

  @ApiProperty({ example: 1 })
  boardId: number;

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

export class MyProfileResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'maxim@gmail.com' })
  email: string;

  @ApiProperty({ example: 'Maxim' })
  firstName: string;

  @ApiProperty({ example: 'Yunak' })
  lastName: string;

  @ApiProperty({ example: '' })
  patronymic: string;

  @ApiProperty({ example: '2026-02-04T09:41:06.742Z' })
  createdAt: string;

  @ApiProperty({ example: '2026-02-04T09:41:06.742Z' })
  updatedAt: string;

  @ApiProperty({ type: [BoardDto] })
  boards: BoardDto[];

  @ApiProperty({ type: [AssigneeTaskDto] })
  assigneeTasks: AssigneeTaskDto[];
}

export class MeResponseDto {
  @ApiProperty({
    description: 'User data',
    type: MyProfileResponseDto
  })
  user: MyProfileResponseDto
}