import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateInviteDto {
  @ApiProperty({
    description: 'ID пользователя которого приглашают',
    example: '13',
  })
  @Type(() => Number)
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
