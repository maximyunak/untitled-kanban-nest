import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class MoveTaskDto {
  @ApiProperty({
    description: 'Позиция в новой колонке',
    example: '1',
  })
  @IsNumber()
  toPosition: number;

  @ApiProperty({
    description: 'ID колонки в которую перемещаем',
    example: '2',
  })
  columnId: number;
}
