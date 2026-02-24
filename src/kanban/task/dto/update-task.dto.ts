import { CreateTaskDto } from './create-task.dto';
import { IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({
    description: 'На кого назначена таска',
    example: 3
  })
  @IsNumber()
  @IsOptional()
  assigneeId: number;
}
