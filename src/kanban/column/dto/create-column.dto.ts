import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateColumnDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Column name',
    example: 'ToDo',
  })
  name: string;
}
