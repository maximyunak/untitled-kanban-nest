import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    description: "Название таски",
    example: "Сделать домашку"
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: "Описание таски",
    example: "Списать с гдз"
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({
    description: "Срок сдачи таски",
    example: "2026-02-24T09:57:23.419Z"
  })
  @IsString()
  @IsOptional()
  deadline: Date;
}
