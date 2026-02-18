import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateInviteDto {
  @ApiProperty({
    description: 'Email юзера которого приглашают',
    example: 'test@gmail.com',
  })
  @IsNotEmpty({ message: 'Email не должен быть пустым' })
  email: string;

  @ApiProperty({
    description: 'ID доски в которую приглашают',
    example: '8',
  })
  @IsNotEmpty()
  @IsNumber()
  boardId: number;
}
