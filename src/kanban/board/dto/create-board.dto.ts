import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBoardDto {
  @ApiProperty({
    description: 'Board name',
    example: 'Untitled-project',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Description',
    example: 'My team board',
    required: false,
  })
  @IsString()
  @IsOptional()
  decsription: string;
}
